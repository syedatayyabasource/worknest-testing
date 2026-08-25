# WorkNest — Testing Across the Stack

WorkNest is a task management web app built with React and Node.js. This version includes tests for the frontend, backend API, and a browser flow.

## Frontend Tests

6 tests cover:

- App rendering
- Form validation
- Adding a task
- Searching tasks
- Filtering tasks
- Updating the open-work count

Tools: Vitest and React Testing Library.

## Backend Tests

6 API tests cover:

- Health check
- Get tasks
- Create task
- Invalid request
- Task not found
- Delete task

Tools: Vitest and Supertest.

## End-to-End Test

The Playwright test covers:

**Open app → Search → Filter → Add task → Check task**

## Tech Stack

React, Vite, Node.js, Express, Vitest, React Testing Library, Supertest, Playwright.

## Installation

```bash
npm install
```

## Start the App

```bash
npm run dev
```

Frontend: `http://127.0.0.1:5173`  
Backend: `http://127.0.0.1:5000`

## Testing

```bash
npm test
npm run test:e2e
npm run test:all
```

Install Playwright browsers if needed:

```bash
npm run install:browsers
```

## Build

```bash
npm run build
```

## Project Structure

```text
worknest-testing/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.test.jsx
│   │   ├── main.jsx
│   │   ├── styles.css
│   │   └── test/setup.js
│   ├── index.html
│   ├── vite.config.js
│   └── vitest.config.js
├── server/
│   ├── src/app.js
│   ├── src/server.js
│   ├── test/api.test.js
│   └── vitest.config.js
├── e2e/workflow.spec.js
├── playwright.config.js
├── package.json
└── README.md
```
