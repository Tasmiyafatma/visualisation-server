# Node.js Service for MongoDB Data Retrieval

## Overview

This Node.js service is designed to retrieve JSON data stored in a MongoDB database and serve it through a GET API. The retrieved data can be displayed in a frontend application.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running
- JSON data uploaded to your MongoDB database

## Installation

1. Clone this repository to your local machine.
   ```bash
   git clone <repository_url>
   ```
2. Node.js Service for MongoDB Data Retrieval

## Overview

This Node.js service is designed to retrieve JSON data stored in a MongoDB database and serve it through a GET API. The retrieved data can be displayed in a frontend application.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running
- JSON data uploaded to your MongoDB database

## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory in your terminal.

   ```bash
   cd <project_directory>
   ```

3. Install dependencies by running:

   ```bash
   npm install
   ```

## Configuration

1. Open the config.js file.
2. Update the MongoDB connection URI to point to your MongoDB instance.

   ```javascript
   module.exports = {
     MONGODB_URI: "your_mongodb_connection_uri_here",
   };
   ```

3. Save the config.js file.

## Starting the Service

To start the Node.js service, run the following command:

    npm start

## API Endpoints

### GET /dashboard-data

- Description: Retrieves JSON data from the MongoDB database.
- Response: JSON data from the database.

## Usage

To retrieve the JSON data, make a GET request to /dashboard-data.

Example using curl:

    curl http://localhost:3000/dashboard-data