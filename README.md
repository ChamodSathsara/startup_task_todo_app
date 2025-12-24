# Task Manager Backend

A production-ready Express.js backend for task management.

## Features

- ✅ Complete CRUD operations for tasks
- ✅ Task status toggling (Pending/Completed)
- ✅ Task scheduling with date/time support
- ✅ Calendar filtering by date
- ✅ User profile management
- ✅ Centralized error handling
- ✅ MongoDB with Mongoose ODM
- ✅ CORS enabled
- ✅ Clean architecture with separation of concerns

### Important Note: Cold Starts

⚠️ **Render Free Tier Limitation:** Services on the free tier spin down after 15 minutes of inactivity. The first request after inactivity may take 30-50 seconds to respond while the service spins up. This is normal behavior for free tier deployments.


## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** bcryptjs

## Project Structure

```
server/
├── src/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── models/
│   │   ├── Task.model.js         # Task schema
│   │   └── User.model.js         # User schema
│   ├── controllers/
│   │   ├── task.controller.js    # Task business logic
│   │   └── user.controller.js    # User business logic
│   ├── routes/
│   │   ├── task.routes.js        # Task endpoints
│   │   └── user.routes.js        # User endpoints
│   ├── middlewares/
│   │   └── error.middleware.js   # Error handling
│   ├── app.js                    # Express app setup
│   └── server.js                 # Server entry point
├── package.json
├── .env
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js 
- MongoDB 

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ChamodSathsara/startup_task_todo_app

```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb+srv://sathsara:startup123@cluster0.fgvwskj.mongodb.net/
NODE_ENV=development
```

4. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start at `http://localhost:5000`

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb+srv://sathsara:startup123@cluster0.fgvwskj.mongodb.net/ |
| `NODE_ENV` | Environment mode | development |

### MongoDB Atlas Setup

For production, use MongoDB Atlas:

1. Create a free cluster at (https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `.env`:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/taskmanager?retryWrites=true&w=majority
```

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Tasks

#### Get All Tasks
```http
GET /api/tasks
```
**Query Parameters:**
- `date` (optional): Filter by date (YYYY-MM-DD)

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "...",
      "title": "Complete project",
      "description": "Finish the backend",
      "status": "Pending",
      "scheduledAt": "2024-12-24T00:00:00.000Z",
      "createdAt": "2024-12-24T10:30:00.000Z",
      "updatedAt": "2024-12-24T10:30:00.000Z"
    }
  ]
}
```

#### Create Task
```http
POST /api/tasks
```
**Body:**
```json
{
  "title": "Complete project",
  "description": "Finish the backend",
  "scheduledAt": "2024-12-25T14:00:00.000Z"
}
```

#### Update Task
```http
PUT /api/tasks/:id
```
**Body:**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "Completed"
}
```

#### Toggle Task Status
```http
PATCH /api/tasks/:id/toggle
```
Switches between "Pending" and "Completed"

#### Delete Task
```http
DELETE /api/tasks/:id
```

### Users

#### Create User
```http
POST /api/users
```
**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### Get User
```http
GET /api/users/:id
```

#### Update User
```http
PUT /api/users/:id
```
**Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "newsecurepassword"
}
```

## Error Responses

All errors follow this format:
```json
{
  "success": false,
  "message": "Error description",
  "stack": "..." // Only in development
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error



## Testing the API

Use tools like:
- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- curl

Example with curl:
```bash
# Create a task
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","description":"Testing the API"}'

# Get all tasks
curl http://localhost:5000/api/tasks

# Filter tasks by date
curl http://localhost:5000/api/tasks?date=2024-12-24
```

## Development

### Code Style
- ES Modules (import/export)
- Async/await for asynchronous operations
- Clean separation of concerns
- Descriptive variable and function names

### Adding New Features

1. Create model in `models/`
2. Create controller in `controllers/`
3. Create routes in `routes/`
4. Register routes in `app.js`

## License
<!-- sxasdadada -->
ISC

## Support

For issues or questions, please open an issue in the repository.