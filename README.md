# API Benchmarking with Autocannon and Node.js

Welcome to the API Benchmarking project! This repository contains a Node.js application that utilizes the `autocannon` package to perform benchmark testing on APIs. Benchmarking APIs is crucial for assessing their performance and identifying bottlenecks.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Perform load testing on APIs to assess their performance.
- Measure response times, throughput, and errors under various loads.
- Command-line interface for easy configuration and execution.
- Detailed reports and statistics for analysis.

## Prerequisites

- Node.js v14 or higher is required. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

Clone this repository to your local machine using:

```bash
git clone https://github.com/dpejic/benchmark-api-autocannon.git
```

## Usage

- Configure API Endpoint, duration in seconds, and connections of the benchmark settings in the index.js file.
- Open a terminal and navigate to the project directory.
- Start the benchmark using the following command:

```bash
  node index.js
```

- View the benchmark results in the terminal.
