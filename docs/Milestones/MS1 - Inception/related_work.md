# Related Work

Our project, "Intelligence in Action: Achieving Trustworthy AI-Driven Networks," integrates machine learning (ML) and automation pipelines (MLOps) with 5G/6G networks, emphasizing trust, risk, and security management with dynamic network participation. We review key platforms and research. For each we assembled key features that may be relevant to our proejct.

## Relevant Research Papers:
---
The analyzed works converge around three main pillars: intelligent automation, security and privacy, and model lifecycle management. In the domain of automation, the concepts of Closed Control Loops (CCL) and Assurance Closed-Control Loops (ACCL) enable networks to autonomously react to load or quality-of-service variations, optimizing resources in real time, as seen in network slicing approaches. Architectures such as AI-native orchestration employ Digital Twins to simulate and test models before deployment, reducing failures and allowing proactive updates guided by dependencies between models and datasets.

Security and privacy emerge as central pillars. Initiatives like the RIGOUROUS framework, the Zero Trust model (e.g., THAALOUB), and Privacy-Based Deployments (DevPrivOps) extend end-to-end protection by incorporating continuous authentication, microservice isolation, and intent-based access control. Meanwhile, approaches such as Privacy-Enhanced Data Analytics (PEDA), Homomorphic Encryption, and Privacy-Preserving Attribute-Based Credentials ensure that sensitive data can be analyzed in public environments without exposure, enabling federated learning and anomaly detection while maintaining regulatory compliance (e.g., GDPR).

Regarding model lifecycle management, platforms such as QMP and evolutions of NWDAF automate model training, validation, and replacement through event-driven processes, ensuring continuous adaptation with minimal human intervention. These ideas align with the concept of trustworthy AI, which emphasizes structural and behavioral integrity, explainability, and traceability across all stages of the pipeline, including accuracy monitoring and responsibility transfer.

In summary, the state of the art points to the evolution of networks as autonomous, secure, and auditable systems, where intelligence becomes an intrinsic part of the infrastructure. The current challenge lies in merging performance and trust — integrating ML, MLOps, security, and governance in a transparent and scalable way — as the Intelligence in Action project aims to achieve by exploring intelligent and trustworthy pipelines for future networks.


## Existing Solutions
---
The Network Data Analytics Function (NWDAF), defined by 3GPP, represents the standardized framework for analytics and AI-driven automation within the 5G Core (5GC) network. Industrial implementations of NWDAF extend this framework with proprietary capabilities to enhance performance, reduce operational complexity, and enable predictive network management.
Among the leading commercial solutions are those from Ericsson and Nokia, which demonstrate mature, cloud-native, and 3GPP-compliant analytics platforms.

### Ericsson's NWDAF

The Network Data Analytics Function (NWDAF), defined by 3GPP, represents the standardized framework for analytics and AI-driven automation within the 5G Core (5GC) network. Industrial implementations of NWDAF extend this framework with proprietary capabilities to enhance performance, reduce operational complexity, and enable predictive network management.
Among the leading commercial solutions are those from Ericsson and Nokia, which provide mature, cloud-native, and 3GPP-compliant analytics platform.

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
