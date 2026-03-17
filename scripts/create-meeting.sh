#!/usr/bin/env bash
set -euo pipefail

# Resolve project root (parent of scripts/)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
MEETINGS_DIR="$PROJECT_ROOT/docs/meetings"

# --- Helpers ---

prompt() {
    local var_name="$1" prompt_text="$2" default="${3:-}"
    if [[ -n "$default" ]]; then
        read -rp "$prompt_text [$default]: " value
        eval "$var_name=\"${value:-$default}\""
    else
        read -rp "$prompt_text: " value
        eval "$var_name=\"$value\""
    fi
}

prompt_yn() {
    local name="$1"
    local answer
    read -rp "  $name (y/n) [y]: " answer
    answer="${answer:-y}"
    if [[ "$answer" =~ ^[Yy] ]]; then
        echo "✔️"
    else
        echo "❌"
    fi
}

prompt_choice() {
    local var_name="$1" prompt_text="$2"
    shift 2
    local options=("$@")

    echo "$prompt_text"
    for i in "${!options[@]}"; do
        echo "  $((i + 1))) ${options[$i]}"
    done

    local choice
    read -rp "Choose [1]: " choice
    choice="${choice:-1}"

    if [[ "$choice" -ge 1 && "$choice" -le "${#options[@]}" ]]; then
        eval "$var_name=\"${options[$((choice - 1))]}\""
    else
        echo "Invalid choice, using: ${options[0]}"
        eval "$var_name=\"${options[0]}\""
    fi
}

# --- Collect inputs ---

echo "=== Meeting Minutes Generator ==="
echo ""

prompt MINUTE_NUM "Minute number"
prompt DATE "Date" "$(date +%Y-%m-%d)"
prompt AUTHOR "Author" "Alexandre Andrade"
prompt START_TIME "Start time (HH:MM)"
prompt END_TIME "End time (HH:MM)"

echo ""
prompt_choice METHOD "Method:" "Presencial" "Online" "Híbrido"

echo ""
echo "Supervisores presentes:"
SUP_TEIXEIRA=$(prompt_yn "Rafael Teixeira")
SUP_DIREITO=$(prompt_yn "Rafael Direito")
SUP_AGUIAR=$(prompt_yn "Rui Aguiar")

echo ""
echo "Membros presentes:"
MEM_ALEXANDRE=$(prompt_yn "Alexandre Andrade")
MEM_ANDRE=$(prompt_yn "André Martins")
MEM_JOAO=$(prompt_yn "João Pereira")
MEM_MIGUEL=$(prompt_yn "Miguel Neto")
MEM_THIAGO=$(prompt_yn "Thiago Vicente")

# --- Generate file ---

OUTPUT_FILE="$MEETINGS_DIR/m${MINUTE_NUM}.md"

if [[ -f "$OUTPUT_FILE" ]]; then
    echo ""
    read -rp "File $OUTPUT_FILE already exists. Overwrite? (y/n) [n]: " overwrite
    overwrite="${overwrite:-n}"
    if [[ ! "$overwrite" =~ ^[Yy] ]]; then
        echo "Aborted."
        exit 1
    fi
fi

cat > "$OUTPUT_FILE" << EOF
---
title: "Minute ${MINUTE_NUM}"
date: "${DATE}"
authors: [${AUTHOR}]
---

# Minute ${MINUTE_NUM}

| **Data** | **Duração** | **Método** |
|:----------|:------------|:-------------|
| ${DATE} | ${START_TIME} - ${END_TIME} | ${METHOD} |

## Supervisores presentes
- Rafael Teixeira ${SUP_TEIXEIRA}
- Rafael Direito ${SUP_DIREITO}
- Rui Aguiar ${SUP_AGUIAR}

## Membros presentes
- Alexandre Andrade ${MEM_ALEXANDRE}
- André Martins ${MEM_ANDRE}
- João Pereira ${MEM_JOAO}
- Miguel Neto ${MEM_MIGUEL}
- Thiago Vicente ${MEM_THIAGO}

## Assuntos discutidos
-

## Resumo
-

## Notas
-

## TODO
-
EOF

echo ""
echo "Created: $OUTPUT_FILE"
