# Related Work

Our project, "Intelligence in Action: Achieving Trustworthy AI-Driven Networks," integrates machine learning (ML) and automation pipelines (MLOps) with 5G/6G networks, emphasizing trust, risk, and security management with dynamic network participation. We review key platforms and research. For each we assembled key features that may be relevant to our proejct.

## Relevant Research Papers:
---
### QMP: A Cloud-native MLOps Automation Platform for Zero-Touch Service Assurance in 5G Systems
[Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9928678)

This platform implements an cloud-native MLOps automation platform for zero-touch service assurance in 5G networks, featuring a full pipeline ( data ingestion, storage, training, retraining and inference ).
It has a full pipeline that envolves data ingestion, store, training, retraining and inference.


### MLOps meets Edge Computing: an Edge Platform with Embedded Intelligence towards 6G Systems
[Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10188244)

This platform implements a distributed automation platform for motorization and automatic control of "6G" networks.
User equipment would provide data for the system and data data would be use in the MLOps pipe to detect anomalies and predict performance in order to balance the network.
Focused more on streaming, using the Platform to Manage Edge Cache (a mini CDN close to users) to scale those caches automatically.


#TODO: more


## Existing Solutions
---
The Network Data Analytics Function (NWDAF), defined by 3GPP, represents the standardized framework for analytics and AI-driven automation within the 5G Core (5GC) network. Industrial implementations of NWDAF extend this framework with proprietary capabilities to enhance performance, reduce operational complexity, and enable predictive network management.
Among the leading commercial solutions are those from Ericsson and Nokia, which demonstrate mature, cloud-native, and 3GPP-compliant analytics platforms.

### Ericsson's NWDAF
[Link](https://www.ericsson.com/en/core-network/5g-core/network-data-analytics-function)

Is a cloud-native, 3GPP-standardized solution designed to enhance 5G core networks with AI-driven analytics. It collects data from network nodes, generates actionable insights, and enables automated actions to optimize performance, reduce costs, and minimize human intervention, supporting networks that learn and improve over time. Built on Ericsson’s dual-mode 5G Core, it facilitates a smooth transition from 4G to 5G.

**Key features**:
- Standardized interfaces and data handling that are aligned with 3GPP for data collection from network nodes and exposure to consumers.
- Deployment flexibility (co-located NWDAF and standalone NWDAF)
-  Expanded use cases: Includes behavior prediction, QoS management, and mobility tracking, tailored to enhance network efficiency and user experience.

### Nokia NWDAF
[Link](https://www.nokia.com/ai-and-analytics/nwdaf/)

Is a cloud-native, 3GPP-compliant solution tailored for 5G networks, leveraging AI to process data and deliver automated insights. It enhances network performance and efficiency by reducing manual oversight, integrating with Nokia’s broader AI and analytics portfolio to support real-time decision-making. This solution is part of Nokia’s strategy to empower service providers with intelligent network management.

**Key features**:

- Standardized interfaces and data handling: Aligned with 3GPP for data collection and exposure to network functions, promoting multi-vendor compatibility and efficient data processing.
- Deployment flexibility: Supports cloud-native and edge-ready options for scalable deployments, adapting to diverse network architectures.
- Expanded use cases: Encompasses traffic prediction, QoS optimization, and anomaly detection, focusing on predictive analytics and network resilience.
