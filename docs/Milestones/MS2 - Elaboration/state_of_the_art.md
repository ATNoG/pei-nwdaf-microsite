---
title: State Of The Art
sidebar_label: State Of The Art
---


# State Of The Art

## Related Work
The reviewed works converge around three main axes: intelligent automation, security and privacy, and model lifecycle management. In the automation domain, concepts like Closed Control Loops (CCL) and Assurance Closed-Control Loops (ACCL) allow networks to react autonomously to load or Quality of Service (QoS) variations, optimizing resources in real time <sup>[[2]](#ref2)</sup><sup>[[3]](#ref3)</sup>. Architectures such as AI-native orchestration leverage Digital Twins to simulate and test models before deployment, reducing failures and enabling proactive updates guided by dependencies between models and datasets <sup>[[3]](#ref3)</sup>.

Security and privacy emerge as central pillars. Initiatives such as the RIGOUROUS framework, the Zero Trust model (e.g., THAALOUB), and Privacy-Based Deployments (DevPrivOps) extend end-to-end protection by incorporating continuous authentication, microservice isolation, and intent-based access policies <sup>[[1]](#ref1)</sup><sup>[[4]](#ref4)</sup><sup>[[5]](#ref5)</sup>. Meanwhile, approaches like Privacy-Enhanced Data Analytics (PEDA), Homomorphic Encryption, and Privacy-Preserving Attribute-Based Credentials ensure the analysis of sensitive data in public or shared environments without exposure, enabling federated learning and anomaly detection while maintaining regulatory compliance (e.g., GDPR) <sup>[[6]](#ref6)</sup><sup>[[7]](#ref7)[[8]](#ref8)</sup>.

MLOps automation platforms:
    - QMP : MLOps automation, multiple models compete using real-time data to determine which performs best. Explains workflow of machine learning operations <sup>[[9]](#ref9)</sup>
    - Data Usage Control for Privacy-Enhanced Network Analytics in Private 5G Networks : introduces a privacy-enhanced data analytics (PEDA) framework for enforcing data usage control (DUC) in private 5G networks that share infrastructure or analytics services with public network operators.The goal is to protect private network data when analytics are performed outside the private trust domain. <sup>[[6]](#ref6)</sup>
    - E2E Network Slice Assurance for B5G/6G: Realizing Data Collection and Management, MLOps, and Closed-Loop Control : Slices network into different slices that each have different SLA (requirements for that slice performance). Uses Closed-Loop Control to automaticly and continously monitor a system performance and apply adjustments to keep performance and quality optimal. <sup>[[5]](#ref5)</sup>

## Existing Solutions
The Network Data Analytics Function (NWDAF), defined by 3GPP, represents the standardized framework for analytics and AI-driven automation within the 5G Core (5GC) network. Industrial implementations of NWDAF extend this framework with proprietary capabilities to enhance performance, reduce operational complexity, and enable predictive network management.
Among the leading commercial solutions are those from Ericsson and Nokia, which demonstrate mature, cloud-native, and 3GPP-compliant analytics platforms. This is a continuation of the [Related Work page of MS1](/docs/Milestones/MS1%20-%20Inception/related_work.md)

### Ericsson <sup>[[10]](#ref10)</sup>

Is a cloud-native, 3GPP-standardized solution designed to enhance 5G core networks with AI-driven analytics. It collects data from network nodes, generates actionable insights, and enables automated actions to optimize performance, reduce costs, and minimize human intervention, supporting networks that learn and improve over time. Built on Ericsson’s dual-mode 5G Core, it facilitates a smooth transition from 4G to 5G.

**Key features**:
- Standardized interfaces and data handling that are aligned with 3GPP for data collection from network nodes and exposure to consumers.
- Deployment flexibility (co-located NWDAF and standalone NWDAF)
-  Expanded use cases: Includes behavior prediction, QoS management, and mobility tracking, tailored to enhance network efficiency and user experience.

### Nokia AVA <sup>[[11]](#ref11)</sup>

Is a cloud-native, 3GPP-compliant solution tailored for 5G networks, leveraging AI to process data and deliver automated insights. It enhances network performance and efficiency by reducing manual oversight, integrating with Nokia’s broader AI and analytics portfolio to support real-time decision-making. This solution is part of Nokia’s strategy to empower service providers with intelligent network management.

**Key features**:

- Standardized interfaces and data handling: Aligned with 3GPP for data collection and exposure to network functions, promoting multi-vendor compatibility and efficient data processing.
- Deployment flexibility: Supports cloud-native and edge-ready options for scalable deployments, adapting to diverse network architectures.
- Expanded use cases: Encompasses traffic prediction, QoS optimization, and anomaly detection, focusing on predictive analytics and network resilience.


## Core Features
 - Predicts various metrics of the network (behavior prediction, QoS management and optimization, anomaly detection, etc...)
 - Uses AI to reduce manual oversight trought automated decision-making
 - Maintain security of the user's data trough data rules enforcement
 - Risk Management on AI Decision Making


## Diferences
| Open Source | Prediction Metrics | Decision Making | MLOps automation |
Our Project | yes | yes | yes | yes |
Nokia AVA | no | yes | yes | yes |
Ericsson | no | yes | yes | yes |

---
## References
- <a name="ref1"></a> [1] A. Kunz, S. B. Mary Baskaran, K. Samdanis and S. Paul, "A Network Security Insight based on AI/ML for 5G Advanced & Beyond," 2023 IEEE Future Networks World Forum (FNWF), Baltimore, MD, USA, 2023, pp. 1-6, doi: 10.1109/FNWF58287.2023.10520559.
- <a name="ref2"></a> [2] S. Marinova, Y. Tian and A. Leon-Garcia, "E2E Network Slice Assurance for B5G/6G: Realizing Data Collection and Management, MLOps, and Closed-Loop Control," in IEEE Open Journal of the Communications Society, vol. 6, pp. 759-774, 2025, doi: 10.1109/OJCOMS.2025.3528644.
- <a name="ref3"></a> [3] N. Toumi and T. Dimitrovski, "AI-native architecture for 6G networks and services with model dependencies," 2024 Joint European Conference on Networks and Communications & 6G Summit (EuCNC/6G Summit), Antwerp, Belgium, 2024, pp. 901-906, doi: 10.1109/EuCNC/6GSummit60053.2024.10597080.
- <a name="ref4"></a> [4] C. Benzaïd, N. Guerd, N. El Houda Rehouma, K. Zeraoulia and T. Taleb, "A Multi-Layered Zero Trust Microsegmentation Solution for Cloud-Native 5G & Beyond Networks," 2025 IEEE Wireless Communications and Networking Conference (WCNC), Milan, Italy, 2025, pp. 1-7, doi: 10.1109/WCNC61545.2025.10978671.
- <a name="ref5"></a> [5] C. Silva, V. A. Cunha, J. P. Barraca and P. Salvador, "Privacy-Based Deployments: The Role of DevPrivOps in 6G Mobile Networks," in IEEE Communications Magazine, vol. 62, no. 6, pp. 66-72, June 2024, doi: 10.1109/MCOM.004.2300405.
- <a name="ref6"></a> [6] H. Zafar, U. Fattore, F. Cirillo and C. J. Bernardos, "Data Usage Control for Privacy-Enhanced Network Analytics in Private 5G Networks," in IEEE Open Journal of the Communications Society, vol. 6, pp. 2976-2992, 2025, doi: 10.1109/OJCOMS.2024.3522379.
- <a name="ref7"></a> [7] B. Acir, E. Onur and R. Boutaba, "Privacy-Preserving User Abnormal Behavior Detection in 5G Networks," 2023 IEEE International Black Sea Conference on Communications and Networking (BlackSeaCom), Istanbul, Turkiye, 2023, pp. 167-172, doi: 10.1109/BlackSeaCom58138.2023.10299735.
- <a name="ref8"></a> [8] A. Kunz et al., "Privacy-preserving Attribute Based Credentials for 6G networks," 2024 IEEE Future Networks World Forum (FNWF), Dubai, United Arab Emirates, 2024, pp. 927-932, doi: 10.1109/FNWF63303.2024.11028813.
- <a name="ref9"></a> [9] G. Samaras, V. Theodorou, D. Laskaratos, N. Psaromanolakis, M. Mertiri and A. Valantasis, "QMP: A Cloud-native MLOps Automation Platform for Zero-Touch Service Assurance in 5G Systems," 2022 IEEE International Mediterranean Conference on Communications and Networking (MeditCom), Athens, Greece, 2022, pp. 86-89, doi: 10.1109/MeditCom55741.2022.9928678.
- <a name="ref10"></a> [10] Ericsson, ["Network Data Analytics Function (NWDAF)"](https://www.ericsson.com/en/core-network/5g-core/network-data-analytics-function).
- <a name="ref11"></a> [11] Nokia, ["Nokia AVA NWDAF"](https://www.nokia.com/ai-and-analytics/nwdaf/).
