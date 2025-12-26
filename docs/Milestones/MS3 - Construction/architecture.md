---
title: Architecture
sidebar_label: Architecture
---

# Revised architecture

---

**Architecture of the full system with details on each component and Minimum Viable Product (MVP) Architecture.**

---

## Full Architecture

import ArchitectureSvg from '@site/static/img/architecture2.svg';
import ArchitectureMVPSvg from '@site/static/img/architectureMVP.svg';
import Processor from '@site/static/img/processor.svg';
import Ingestion from '@site/static/img/ingestion.svg';
import Storage from '@site/static/img/storage.svg';
import ML from '@site/static/img/ml.svg';
import Decision from '@site/static/img/decision.svg';
import Frontend from '@site/static/img/frontend.svg';
import Auth from '@site/static/img/auth.svg';
import Logs from '@site/static/img/logs.svg';
import Consumer from '@site/static/img/consumer.svg';
import Producer from '@site/static/img/producer.svg';
import Kafka from '@site/static/img/kafka.svg';
import Policy from '@site/static/img/policy.svg';


Below lies a further developed design of the architecture for the full system, up to this point of technical assessment:

<ArchitectureSvg style={{ width: '1300px', height: '700px' }} role="img" />

## Component Details

<div style={{display: 'flex', justifyContent: 'center'}}>
<table>
  <thead>
    <tr>
      <th style={{width: '400px'}}>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <Processor style={{width: '150px', height: '100px'}} />
        <div><strong>Processor</strong></div>
      </td>
      <td>Fetches raw data from the Storage, processes it by following defined profiles, and sends it back to Storage for the respective database for this new, treated and handled data. Receives data from Kafka topics, applies processing logic including windowing strategies, and outputs data for usage on the Machine Learning Service.</td>
    </tr>
    <tr>
      <td align="center">
        <Ingestion style={{width: '150px', height: '100px'}} />
        <div><strong>Ingestion</strong></div>
      </td>
      <td>Primary entry point for external network data (may be considered a data broker of sorts, to the inner system), including support for real-time data streaming for system status, via WebSocket. Receives raw network measurements, and publishes data to Kafka topics for storage and processing. Supports batch intake of data, making it flexible for various network data sources and collection methods.</td>
    </tr>
    <tr>
      <td align="center">
        <Storage style={{width: '300px', height: '250px'}} />
        <div><strong>Storage</strong></div>
      </td>
      <td>Manages persistent storage using a dual-database approach with InfluxDB for time-series data and ClickHouse for columnar analytics queries. Integrates with Kafka for data streaming and supports both historical analysis and real-time query patterns.</td>
    </tr>
    <tr>
      <td align="center">
        <ML style={{width: '300px', height: '320px'}} />
        <div><strong>Machine Learning</strong></div>
      </td>
      <td>For Machine Learning (ML) components in the network analytics pipeline. Contains standardized patterns for implementing ML models. This service provides guidelines for adding ML models.</td>
    </tr>
    <tr>
      <td align="center">
        <Decision style={{width: '150px', height: '100px'}} />
        <div><strong>Decision</strong></div>
      </td>
      <td>Receives inferences from ML, makes decisions, and assesses de risk of those. These validated decisions are then sent to Network Consumers subscribed to a respective topic</td>
    </tr>
    <tr>
      <td align="center">
        <Frontend style={{width: '300px', height: '100px'}} />
        <div><strong>Frontend</strong></div>
      </td>
      <td>Includes improved real-time data visualization, intuitive monitoring interfaces, and ML model control panels, providing operators with great tools for network analytics and resource management. Is tethered to the NGINX Reverse Proxy component, for concealment of the internal system's addresses.</td>
    </tr>
    <tr>
      <td align="center">
        <Auth style={{width: '150px', height: '100px'}} />
        <div><strong>Auth</strong></div>
      </td>
      <td>Keycloak component for authentication to access role-specific features of the system.</td>
    </tr>
    <tr>
      <td align="center">
        <Logs style={{width: '420px', height: '100px'}} />
        <div><strong>Logs</strong></div>
      </td>
      <td>Logging and monitoring system for tracking of overall components' status and performance.</td>
    </tr>
    <tr>
      <td align="center">
        <Consumer style={{width: '380px', height: '100px'}} />
        <div><strong>Consumer</strong></div>
      </td>
      <td>Consumer component which will subscribe to a topic, in which it receives decisions that were previously validated.</td>
    </tr>
    <tr>
      <td align="center">
        <Producer style={{width: '380px', height: '100px'}} />
        <div><strong>Producer</strong></div>
      </td>
      <td>Generates synthetic network data using the DoNext 5G/6G measurement dataset from Schippers et al. research. This module extracts and processes network measurement data to provide realistic test scenarios for the entire pipeline. It plays a crucial role in development, testing, and demonstration by providing consistent, reproducible network data that simulates real-world telecommunications scenarios.</td>
    </tr>
    <tr>
      <td align="center">
        <Kafka style={{width: '450px', height: '100px'}} />
        <div><strong>Kafka</strong></div>
      </td>
      <td>Uses Apache Kafka as the message broker. Relates to the PyKafBridge module[^1], which handles Kafka producer/consumer operations, topic management, and message binding. This component enables asynchronous communication between all system components, serving as the backbone for real-time data streaming throughout the network analytics pipeline.</td>
    </tr>
    <tr>
      <td align="center">
        <Policy style={{width: '350px', height: '100px'}} />
        <div><strong>Policy</strong></div>
      </td>
      <td>Policy enforcement and management service, controlling what is and is not used for processing and inference-making.</td>
    </tr>
  </tbody>
</table>
</div>

[^1]: For more information see: [Repository Division](./construction.md)

## MVP Architecture

As decided for development of the Construction phase, here lies the view of the architecture for the minimally viable product, in its core stage:

<ArchitectureMVPSvg style={{ width: '1300px', height: '700px' }} role="img" />

### Why?

One may question the reason for choosing these components and not some of the greyed out ones. Although it seems like a small volume of components missing, they are part of the full-on next step, aiming for privacy and security for data, access control, fully fledged logging, and management of decisions that will be casted out to network consumers. Those will be the main focus over the course of the next months for the project, to achieve state of art.

However, the project in its current state could be deployed in production for real-life scenarios, considering the implementation and internal modularity already provided to ease system adaptation to any given context.
