---
title: Requirements
sidebar_label: Requirements
---

<div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>

<div style={{flex: 1, minWidth: '300px'}}>

### Functional Requirements

| Functional Requirement |
|---|
| The system shall allow authenticated users to define and configure the five risk levels for decision classification |
| System shall be able to automatically and manually rollback models |
| The system shall allow authenticated users to configure the performance threshold for detecting model degradation |
| The system shall allow the decommission of a model |
| The system shall provide and store performance metrics of deployed models |
| An authenticated manager shall be able to generate reports |
| The system shall calculate key performance metrics for each model |
| The system shall store performance metrics over time, including timestamps and model identifiers |
| The system shall expose performance metrics through an authenticated API endpoint for monitoring and analysis |
| The system shall allow the ML engineer to select two or more models from the dashboard for comparison |
| The system shall display the performance metrics of the selected models side by side |
| The system shall provide a table to facilitate the comparison of model performance |
| The system shall automatically detect when a model performance goes below a threshold and replace it |
| The system shall send alerts when a degradation is detected |
| The system shall keep records of all associations |
| The system shall expose logs through an authenticated API endpoint |
| The system shall continuously receive new data |
| The system shall train models with updated data |
| The system must provide access to a dashboard for authenticated users |
| The dashboard update interval shall be configurable |
| The dashboard shall update data automatically |
| The system shall classify the decisions in 5 risk levels (Low, Medium-Low, Medium, High, Critical) |
| Decisions in the two riskier levels shall be alerted and approved |
| The system shall compute decisions based on input data |
| System shall keep logs of reviewer's name, decision, date and reasoning |
| An authenticated manager shall be able to create, edit and delete user accounts |
| The system shall store all decisions |
| The system shall filter the data before feeding the models |
| The system shall allow the engineer to inject new network data into it |

</div>

<div style={{flex: 1, minWidth: '300px'}}>

### Non-Functional Requirements

| Non-Functional Requirement |
|---|
| The system must ensure user data privacy |
| The system must ensure that accessed data meets access policies |
| Logs can't be deleted/updated |
| System APIs must follow the 3GPP standard |
| Each user is assigned to predefined roles |
| All pipeline components produce logs with timestamps and their actions |
| Model training is parallel |
| The system must test, validate, and deploy models without manual intervention |
| Communications between components is encrypted |
| Risk is leveraged both within the active model's decision boundaries and the risk management component |
| The system shall enforce data governance policies to data queries |
| Model logs must include model version, timestamp and performance metric |
| The system must continue operating if ML components fail |
| Data must be consistent across the system |
| Only trustworthy components can have access to the pipeline |

</div>

</div>
