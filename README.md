# GamesAPI

A simple REST API for managing game users and their scores, built with Node.js and Express.

## Overview

This API provides endpoints to manage game users and their scores. It uses a JSON file as a simple database to store user information including usernames, scores, and available tools.

## Features

- Add user scores
- Retrieve all users
- JSON-based data storage
- Error handling and validation
- CORS support

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **dotenv** - Environment variable management
- **nodemon** - Development server

## Project Structure

```
GamesAPI/
├── index.js                          # Main server file
├── package.json                      # Dependencies and scripts
├── src/
│   ├── controllers/                  # Request handlers
│   │   ├── add_user_score.controller.js
│   │   └── get_users.controller.js
│   ├── database/
│   │   └── users.json               # JSON database
│   ├── lib/
│   │   └── get_response_error_data.js # Error handling utilities
│   ├── routes/
│   │   └── route.js                 # API routes
│   └── services/                    # Business logic
│       ├── add_user_score.service.js
│       └── get_users.service.js
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GamesAPI
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=8080
```

## Usage

### Start the server

```bash
npm start
```

The server will start on port 8080 (or the port specified in your `.env` file).

### API Endpoints

#### Add User Score
- **POST** `/api/add-score`
- **Description**: Adds or updates a user's score
- **Request Body**:
```json
{
  "user_id": "string",
  "score": number
}
```
- **Response**:
```json
{
  "successful": true,
  "data": {
    "id": "user_001",
    "username": "player1",
    "scores": 5000,
    "tools": ["power_ups", "extra_lives", "time_boost"],
    "created_at": "2024-01-10T08:00:00Z"
  }
}
```

#### Get All Users
- **GET** `/api/get-users`
- **Description**: Retrieves all users and their information
- **Response**:
```json
{
  "successful": true,
  "data": [
    {
      "id": "user_001",
      "username": "player1",
      "scores": 5000,
      "tools": ["power_ups", "extra_lives", "time_boost"],
      "created_at": "2024-01-10T08:00:00Z"
    }
  ]
}
```

### Error Responses

All endpoints return consistent error responses:

```json
{
  "successful": false,
  "message": "Error description"
}
```

Common HTTP status codes:
- `400` - Bad Request (missing or invalid parameters)
- `405` - Method Not Allowed
- `500` - Internal Server Error

## Data Model

### User Object
```json
{
  "id": "string",           // Unique user identifier
  "username": "string",      // Display name
  "scores": number,          // Current score
  "tools": ["string"],       // Array of available tools
  "created_at": "string"     // ISO 8601 timestamp
}
```

## Development

The project uses ES6 modules and includes:
- Input validation
- Error handling
- CORS middleware
- JSON parsing middleware

## License

ISC