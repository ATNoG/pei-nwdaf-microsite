---
title: Context
sidebar_label: Context
---
## Networks

## NWDAF

## MLOps Pipeline

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

- SLA violations on Utilization Spikes
    - If not prepared well, the network might strugle to keep up with spikes in certains areas of the system, and cause drop of quality on those areas without the proper preparation and prediction of those spikes, those drops of quality will cause a violation on the requirements agreement to the quality of the network

## Goals

- The primary goal of this system is to automaticly and mainly without human intervention aquire data from the network and provide insights on the future load of the network
- The system aims to collect data from a 5G network using that network functions, and with an architecture made to be scalable and focused on MLOps, will provide intelligence to the network in order for it to have its own intelligence, the different models will be trained and the system will automaticly switch trought the models to ensure high performance of those models
- We also need to ensure that sensitive data about users is correctly processed and used in order not to invade their privacy
