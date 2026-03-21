# Vulnerable App

This is an intentionally vulnerable Next.js application designed for educational purposes, security training, and testing security tools. It demonstrates common web vulnerabilities and provides a platform to practice identifying and mitigating them.

> [!WARNING]
> This application contains intentional security vulnerabilities (XSS, SQL Injection). **DO NOT** deploy this application to a production environment or expose it to the public internet. Use it only in a controlled, isolated laboratory environment.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (v16.2.1)
- **Library:** [React](https://reactjs.org/) (v19.2.4)
- **Database Driver:** [pg](https://node-postgres.com/) (v8.20.0) for PostgreSQL

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- PostgreSQL (for the API functionality)

### Installation

1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd badrepo/badrepo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Database Setup

The API endpoint (`/api/users`) requires a PostgreSQL database.
1. Create a PostgreSQL database.
2. Configure the connection details in `pages/api/users.js` (Note: In a real app, use environment variables).

### Running the App

Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Intentional Vulnerabilities

### 1. Cross-Site Scripting (XSS)
- **Location:** `/search` (implemented in `pages/search.js`)
- **Vulnerability:** Reflected XSS.
- **Description:** The search query parameter is directly rendered into the page using `dangerouslySetInnerHTML` without any sanitization.
- **Example Payload:** `?query=<script>alert('XSS')</script>`

### 2. SQL Injection (SQLi)
- **Location:** `/api/users` (implemented in `pages/api/users.js`)
- **Vulnerability:** Unsanitized SQL query.
- **Description:** The `username` query parameter is concatenated directly into a SQL statement, allowing for arbitrary SQL code execution.
- **Example Payload:** `/api/users?username=admin' OR '1'='1`

## Security Best Practices (What to Avoid)

This project serves as a "what-not-to-do" guide:
- **XSS:** Always sanitize user-provided HTML or use React's default escaping behavior instead of `dangerouslySetInnerHTML`.
- **SQLi:** Always use parameterized queries or an ORM/Query Builder that handles parameterization automatically. Never use string concatenation for SQL queries.

## License

This project is licensed under the ISC License.
<!-- sentinel test Sat Mar 21 15:16:19 PDT 2026 -->
