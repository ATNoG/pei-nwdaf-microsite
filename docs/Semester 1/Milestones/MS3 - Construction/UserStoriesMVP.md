---
title: User Stories & Requirements MVP
sidebar_label: User Stories & Requirements MVP
---

## User Stories

From the set of user stories defined in earlier stages of the project's development, the following ones were chosen and implemented for the MVP, due to the importance given by the group to their contents:


- **Network Engineer**

    -   As a **network engineer**, 
I want to **provide updated network data to the system**, 
so that **the system can use the new data to produce inferences**.

- **ML Engineer**
    - As a **ML engineer**,
I want to **request an inference**,
so that **I can test the system**.
    - As a **ML engineer**,
I want to **start the model training process**,
so that **new model iterations can erupt from newly provided data**.
    - As a **ML engineer**,
I want to **compare the performance of different models**,
so that **I can select the most accurate and efficient one for deployment**.
    - As a **ML engineer**,
I want to **monitor the performance metrics of deployed models**,
so that **I can detect issues early and ensure model reliability**.

## Requirements

Following the chosen user stories, a subset of the original requirements were also selected and implemented, due to their relevance to the problem in hand, namely:


**1.** The system shall continuously receive new data

**2.** The system shall filter the data before feeding the models

**3.** The system shall train models with updated data

**4.** The system shall provide and store performance metrics of deployed models

**5.** The system shall store performance metrics over time, including timestamps and model identifiers

**6.** The system shall expose performance metrics through an authenticated API endpoint for monitoring and analysis

**7.** Model training is parallel

**8.** The system must continue operating if ML components fail

**9.** All pipeline components produce logs with timestamps and their actions

**10.** Model logs must include model version, timestamp and performance metric

**11.** Data must be consistent across the system

