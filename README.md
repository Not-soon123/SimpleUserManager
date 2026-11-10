# User Management

A starter Express application for a user management project. It uses EJS for views and dotenv for environment variables.

## Requirements

- Node.js and npm

## Getting started

Install the dependencies:

```bash
npm install
```

Optionally create a `.env` file in the project root to choose the server port:

```env
PORT=3000
```

Start the server:

```bash
node app.js
```

If `PORT` is not set, the app uses port `3000`. Open [http://localhost:3000](http://localhost:3000) to see the sample response.

## Current route

| Method | Path | Response |
|---|---|---|
| GET | `/` | `User Management app is running!` |

The route is registered in `routes/userRoutes.js` and handled by `controllers/userController.js`.