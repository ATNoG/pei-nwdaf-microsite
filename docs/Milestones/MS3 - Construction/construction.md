---
title: Repository division
sidebar_label: Repository division
---

Main repository name: `pei-nwdaf`

Up to this phase, the project has been divided into submodules, that is, several smaller repositories designated for each component of the system:

---
***Example:***
* ***`Submodule-Name` (Abbreviation meaning, if any) - `repository-name`** - \[Description\]*
---
* **`Comms` (Communications) - [`pei-nwdaf-comms`](https://github.com/ATNoG/pei-nwdaf-comms)** - For modules related to communication across different components. Currently has a module that works with Kafka, `PyKaf`, which abstracts several aspects of the middleware communication for ease of development among peers on the system, upon creating components that talk to eachother.
* **`Network-Producer` - [`pei-nwdaf-network-producer`](https://github.com/ATNoG/pei-nwdaf-network-producer)** - Representation of a barebones metrics producer to feed the system.
* **`Data-Storage` - [`pei-nwdaf-data-storage`](https://github.com/ATNoG/pei-nwdaf-data-storage)** - Stores both raw and processed data for usage on the system.
* **`Ingestion-Service` - [`pei-nwdaf-data-ingestion`](https://github.com/ATNoG/pei-nwdaf-data-ingestion)** - A broker that receives data and delegates it to the Data Storage Service.
* **`Data-Processor` - [`pei-nwdaf-data-processor`](https://github.com/ATNoG/pei-nwdaf-data-processor)** - The component that fetches raw data from the Storage, processes it by following defined *profiles*, and sends it back to Storage for the respective database for this new, treated and handled data.
* **`ML` (Machine Learning) - [`pei-nwdaf-ml`](https://github.com/ATNoG/pei-nwdaf-ml)** - Contains the modules relative to training, inference, performance metrics, as well as the inner interface that communicates with components through different methods.
* **`Infra` (Infrastructure) - [`pei-nwdaf-infra`](https://github.com/ATNoG/pei-nwdaf-infra)** - Repository with initialization files (such as a `docker-compose.yml` file) for components like `Kafka`.
* **`Frontend` - [`pei-nwdaf-frontend`](https://github.com/ATNoG/pei-nwdaf-frontend)** - System dashboard and UI currently used for the MVP, comprised of an overview of different stages of the system, from Ingestion status to model status and metrics pages.
* **`Documentation` - [`pei-nwdaf-microsite`](https://github.com/ATNoG/pei-nwdaf-microsite)** - This microsite's habitat (yay): where important project documentation and reports go.
* **`Template` - [`pei-nwdaf-template`](https://github.com/ATNoG/pei-nwdaf-template)** - Base template used for the creation of new repositories. Important to keep structural identity. `Jenkinsfile` and `docker-compose.yml` files are pratically a must for every service.

This is a high level description of each component for what inhabits in each repository. These are explored in greater detail in the **Architecture** section.

## Advantages & Reasoning

It was agreed since the beginning of development that having a monolithic repository for the different system aspects was counter-productive and would go against both services and microservices' principles, that promote ease-of-development without much dependency on another's work.

Submodules offer a realistic perspective of deployment of the system as a whole in a production scenario, which is ideally a distributed, decentralized, aggregation of machines, each with its respective task(s), isolated via containerization (Docker), still allowing more than one service to run on the same host without interference.
