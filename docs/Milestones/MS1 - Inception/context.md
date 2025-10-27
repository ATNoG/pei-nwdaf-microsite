---
title: Context
sidebar_label: Context
---
## Networks

The digital transformation of society, driven by immersive experiences, pervasive IoT, and mission-critical industrial automation, is placing unprecedented demands on network infrastructures. These new use cases require not merely connectivity, but guaranteed performance, resilient security, and dynamic resource allocation. While 5G provides the foundational enablers—such as network slicing and edge computing—to meet these demands, its inherent complexity renders traditional, manual management paradigms obsolete. The vision of self-healing, self-optimizing networks (SON) can only be realized through a deep infusion of intelligence, where data is continuously transformed into proactive action. This necessitates a new operational fabric built on automated machine learning pipelines and robust, real-time analytics, all secured against an evolving threat landscape.

## NWDAF

The Network Data Analytics Function (NWDAF) is a core component of the 5G Service-Based Architecture (SBA) defined by 3GPP. It provides analytics services to other network functions (NFs) and management systems, enabling data-driven decision-making across the network. NWDAF acts as the intelligence layer of the 5G system, transforming large volumes of operational data into actionable insights for automation, optimization, and assurance.

NWDAF collects data from various network functions such as the AMF (Access and Mobility Management Function), SMF (Session Management Function), and PCF (Policy Control Function), as well as external data sources. Through standardized interfaces, it provides analytics outputs to consumers such as network orchestrators, policy managers, and OAM systems.

Key capabilities include:

- Data Aggregation and Correlation: Integrates and normalizes multi-domain and multi-source network data (e.g., performance metrics, event logs, user mobility patterns) into a unified analytical view.

- Predictive and Descriptive Analytics: Supports both historical analysis for performance evaluation and predictive models for forecasting network load, traffic anomalies, and resource demands.

- Closed-loop Automation: Feeds real-time insights back into control systems to trigger self-optimizing network (SON) actions, such as resource reallocation, policy adjustment, or fault mitigation.

- Extensibility via AI/ML Integration: NWDAF can host or interface with external machine learning models within an MLOps-driven ecosystem, supporting continuous model training, deployment, and lifecycle management.


## MLOps Pipeline

The MLOps Pipeline represents the operational backbone for managing the complete machine learning lifecycle in a reliable, automated, and scalable manner. It extends traditional DevOps principles—such as continuous integration (CI) and continuous deployment (CD)—to include continuous training (CT), ensuring that ML models remain accurate and effective throughout their lifecycle.

The ML lifecycle is inherently iterative, spanning from data preparation to post-deployment monitoring. It begins with data collection, cleansing, and exploratory analysis (EDA), followed by feature engineering and model development. Once models are trained and validated, they are deployed into production environments where they generate predictions or insights. Continuous monitoring mechanisms track performance and detect drift, triggering retraining cycles when necessary. This feedback-driven process ensures adaptability and sustained model performance over time.

An MLOps pipeline automates and orchestrates each of these stages—data ingestion, preprocessing, training, validation, deployment, monitoring, and governance—ensuring that the end-to-end process is reproducible, auditable, and secure. It enforces traceability, version control, and compliance through integration with AI TRiSM principles, ensuring that every model decision is explainable and accountable.

In the context of this project, the MLOps pipeline is the foundation for intelligent network management. It continuously transforms data from the NWDAF into actionable intelligence, enabling predictive analytics and adaptive optimization. By maintaining a closed feedback loop between model training and network behavior, the pipeline ensures that the system evolves dynamically with changing network conditions—achieving the vision of autonomous, self-healing, and self-optimizing networks.

## Security

As networks become increasingly data-driven and interconnected, security emerges as a foundational pillar for ensuring trust, resilience, and privacy across all layers of operation. The massive influx of user data—from mobile devices, IoT sensors, and mission-critical systems—introduces complex challenges related to data protection, identity management, and secure information exchange. In next-generation networks such as 5G and 6G, where virtualization, edge computing, and AI-driven automation converge, the attack surface expands exponentially, demanding robust, adaptive, and intelligent security mechanisms. Security can no longer be treated as a static perimeter defense; it must be embedded natively into the network and MLOps pipeline, enabling continuous monitoring, dynamic threat detection, and automated response. This includes safeguarding user data through encryption and anonymization, securing APIs and data streams through authentication and access control, and ensuring model integrity against adversarial manipulation. Ultimately, the goal is to establish a zero-trust architecture that upholds confidentiality, integrity, and availability, ensuring that as networks evolve to become more autonomous, they remain secure, compliant, and trustworthy by design.

## Trust, Risk, and Security Management (AI TRiSM / RIGOROUS)

As ML and automation become central to network operations, ensuring trust, security, and risk governance across the pipeline becomes critical. The AI TRiSM (Artificial Intelligence Trust, Risk, and Security Management) framework addresses these challenges by embedding governance and security principles across the AI/ML lifecycle.

AI TRiSM encompasses four key pillars:

- **Trustworthiness and Explainability**: Models must provide transparent and interpretable outputs, enabling human operators to understand and validate ML-driven decisions.

- **Risk Management**: Identification, assessment, and mitigation of risks associated with data quality, model drift, adversarial manipulation, and operational failures.

- **Security and Compliance**: Implementation of robust access control, encryption, and audit mechanisms to protect data integrity and ensure regulatory compliance.

- **Governance and Accountability**: Establishing policies for model versioning, traceability, and decision logging to ensure operational and ethical accountability.

In this project, AI TRiSM principles are integrated throughout the MLOps pipeline and network interaction layers. Each stage - from data ingestion to model deployment - is accompanied by security validation, audit logging, and trust attestation. The system continuously monitors model integrity, detects anomalies in data flows, and enforces access policies through authentication and authorization mechanisms.

The adoption of TRiSM not only safeguards the system from data and model threats but also enhances transparency and confidence in AI-driven network decisions. It ensures that intelligent network operations remain robust, auditable, and ethically compliant, aligning with the vision of RIGOROUS AI—Responsible, interpretable, governed, and observable intelligence systems.

## Problems

- Maintenance of network
    - Manual maintenance and setup of a network is expensive and might be slow
    - According to [5G-Mobix](https://www.5g-mobix.com/assets/files/5G-MOBIX-D6.6-Final-report-on-the-business-models-for-cross-border-5G-deployment-enabling-CAM_v2.0.pdf) it might cost up to 13.800€ per year per station, if you need 100 stations to cover an urban area it adds up to 1.380.000€ per year
- Future networks will be so complex that manual maintenance would not be possible
- Reactive Aproach to network management
    - Manual maintenance might only react to a problem after it happens and then try to mitigate it, causing slowdowns and a drop of quality of the system
    - Proactive approach that predicts those problems before they even happen can prepare the network for those problems before they take place

- SLA violations 
    - If not prepared well, the network might struggle to keep up with anomalies(attacks, some server died, utilization spikes) in certains areas of the system, and cause drop of quality on those areas without the proper preparation and prediction of those spikes, those drops of quality will cause a violation on the requirements agreement to the quality of the network

## Goals

- The primary goal of this system is to automatically and mainly without human intervention aquire data from the network and provide insights on the future metrics of the network
- The system aims to collect data from a 5G network using that network function, and with an architecture made to be scalable and focused on MLOps, will provide intelligence to the network in order for it to have its own intelligence, the different models will be trained and the system will automaticly switch troughout the models to ensure high performance of those models
- We also need to ensure that sensitive data about users is correctly processed and used in order not to invade their privacy
