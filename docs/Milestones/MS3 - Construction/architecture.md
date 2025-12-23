---
title: Architecture
sidebar_label: Architecture
---

# Revised architecture

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

**NOTE:** The topic is further explained below this figure.

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
      <td>a</td>
    </tr>
    <tr>
      <td align="center">
        <Ingestion style={{width: '150px', height: '100px'}} />
        <div><strong>Ingestion</strong></div>
      </td>
      <td>Manages data ingestion from various sources</td>
    </tr>
    <tr>
      <td align="center">
        <Storage style={{width: '300px', height: '250px'}} />
        <div><strong>Storage</strong></div>
      </td>
      <td>Persistent data storage layer</td>
    </tr>
    <tr>
      <td align="center">
        <ML style={{width: '300px', height: '320px'}} />
        <div><strong>ML</strong></div>
      </td>
      <td>Machine Learning pipeline and model management</td>
    </tr>
    <tr>
      <td align="center">
        <Decision style={{width: '150px', height: '100px'}} />
        <div><strong>Decision</strong></div>
      </td>
      <td>Decision-making engine based on ML outputs</td>
    </tr>
    <tr>
      <td align="center">
        <Frontend style={{width: '300px', height: '100px'}} />
        <div><strong>Frontend</strong></div>
      </td>
      <td>User interface dashboard</td>
    </tr>
    <tr>
      <td align="center">
        <Auth style={{width: '150px', height: '100px'}} />
        <div><strong>Auth</strong></div>
      </td>
      <td>Authentication and authorization service</td>
    </tr>
    <tr>
      <td align="center">
        <Logs style={{width: '420px', height: '100px'}} />
        <div><strong>Logs</strong></div>
      </td>
      <td>Logging and monitoring system</td>
    </tr>
    <tr>
      <td align="center">
        <Consumer style={{width: '380px', height: '100px'}} />
        <div><strong>Consumer</strong></div>
      </td>
      <td>Message consumer for event-driven architecture</td>
    </tr>
    <tr>
      <td align="center">
        <Producer style={{width: '380px', height: '100px'}} />
        <div><strong>Producer</strong></div>
      </td>
      <td>Message producer for event-driven architecture</td>
    </tr>
    <tr>
      <td align="center">
        <Kafka style={{width: '450px', height: '100px'}} />
        <div><strong>Kafka</strong></div>
      </td>
      <td>Apache Kafka message broker</td>
    </tr>
    <tr>
      <td align="center">
        <Policy style={{width: '350px', height: '100px'}} />
        <div><strong>Policy</strong></div>
      </td>
      <td>Policy enforcement and management</td>
    </tr>
  </tbody>
</table>
</div>

## MVP Architecture

As decided for development of the Construction phase, here lies the view of the architecture for the minimally viable product, in its core stage:

<ArchitectureMVPSvg style={{ width: '1300px', height: '700px' }} role="img" />

### Why?

One may question the reason for choosing these components and not some of the greyed out ones. Although it seems like a small volume of components missing, they are part of the full-on next step, aiming for privacy and security for data, access control, fully fledged logging, and management of decisions that will be casted out to network consumers. Those will be the main focus over the course of the next months for the project, to achieve state of art.

However, the project in its current state could be deployed in production for real-life scenarios, considering the implementation and internal modularity already provided to ease system adaptation to any given context.
