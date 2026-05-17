---
id: summary
title: Summary
---

# AION - AI-Driven 5G NWDAF Platform

Our goal here is to provide the platform where AI models can be inserted and run over network telemetry data, allowing for automated decision-making and analytics in the 5G NWDAF context.

Network telemetry is continuously ingested, processed, and stored. Machine learning models run inference over that data and publish results to a shared event stream. A policy layer governs data access between all components, ensuring that only authorized services can read or act on sensitive network metrics. An LLM-based decision service consumes model inferences and translates them into actionable network recommendations.

The result is a closed-loop system where raw network data flows through collection, analysis, and decision stages, with policy enforcement and observability at every step.

## What makes us different?

### Policy Enforcement
We enforce policy at every step of the system, ensuring that only authorized services can read or act on sensitive network metrics. This also allows to treat some fields as sensitive and protect them from unauthorized access (e.g., by hashing or even dropping those fields).

### ML models support
We support any ML model that follows the interface we provide. New architectures can be added without modifying the core system. They run in a isolated environment providing isolation and security.

> **Note:** our system comes with some architectures used for system validation but it is recommended to use other architectures for production.

### Resource Limiting
Model instances are trained with resource limitations in mind to ensure that they do not consume too much memory or CPU. These limits are configured per model instance and can be adjusted.

### LLM-based Decision Service
We choose to let an LLM take decisions over the network data. This allows us to add and remove possible decisions without modifying the core system. 


## Architecture

![Architecture](/img/architecture_17_05_2026.png)


## License
This project is licensed under [AGPL-3.0](https://github.com/ATNoG/pei-nwdaf/blob/main/LICENSE).
