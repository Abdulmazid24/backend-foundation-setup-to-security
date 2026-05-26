# Express, TypeScript, and Neon PostgreSQL Backend Foundation

A robust, layered backend foundation implementing industry-standard architectural patterns, data access layers, secure password hashing, central logging, and structured error handling. 

Developed during Programming Hero Level-2 (Batch 7) Mission 2 conceptual sessions to master the core implementation mechanics of scalable and secure REST APIs.

---

## 🏗️ System Architecture: Controller-Service-Route (CSR)

This project implements a **3-Layer Architecture** to decouple the HTTP routing layer, control orchestration, and business logic from database interactions.

```
                  [ Client Request ]
                          │
                          ▼
            [ Router Layer (auth.route.ts) ]
                          │
                          ▼
         [ Controller Layer (auth.controller.ts) ] ◄──► [ Middleware Pipeline ]
                          │
                          ▼
          [ Service Layer (auth.service.ts) ]
                          │
                          ▼
           [ Database Layer (Neon Client) ]
```

1. **Router Layer:** Handles HTTP verb mapping (GET, POST, etc.) and routes endpoints.
2. **Controller Layer:** Orchestrates HTTP requests (`req`), processes payload extraction, delegates logic to services, and constructs HTTP responses (`res`).
3. **Service Layer:** Executes core business logic, handles cryptographic operations, and manages database transactions. It remains frameworks-agnostic.
4. **Database Layer:** Communicates with Neon PostgreSQL Serverless using parameterized SQL template queries to prevent SQL injections.

---

## 🛠️ Tech Stack & Key Implementations

- **Runtime:** [Node.js (v20+)](https://nodejs.org/) (configured with native ECMAScript Modules - ESM)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict compilation configurations, Type assertions, and Mapped types)
- **Framework:** [Express.js (v5)](https://expressjs.com/)
- **Database:** [Neon PostgreSQL Serverless](https://neon.tech/) (using exact numeric fixed-point scaling for financial calculations and cascade deletions)
- **Transpiler:** [tsx (esbuild-based)](https://github.com/privatenumber/tsx) for ultra-fast compilation
- **Security:** Cryptographic password hashing using **bcrypt** (10 salt rounds)

---

## 🚀 Key Features Built

- **Unified Error Handling:** Global Express error-handling middleware that hides stack traces in production environment states.
- **Logger Middleware:** A custom request interception logger displaying system time, HTTP method, and URL.
- **Relational Integrity:** Schema containing Foreign Key referencing, cascading deletes (`ON DELETE CASCADE`), and Domain constraints (`CHECK (quantity > 0)`).
- **Exact Numeric Representation:** Financial data stored using the `NUMERIC(10, 2)` exact fixed-point structure instead of floating-point representations.
- **Local Config Validator:** Zero-dependency environment variable orchestration using `.env.example` configurations.

---

## 📥 Getting Started

### 1. Prerequisites
Ensure you have node installed:
```bash
node -v  # Expected: v20.x or higher
npm -v   # Expected: v10.x or higher
```

### 2. Installation
Clone the repository and install all development and runtime dependencies:
```bash
git clone https://github.com/Abdulmazid24/backend-foundation-setup-to-security.git
cd backend-foundation-setup-to-security
npm install
```

### 3. Environment Setup
Copy the environment template and configure your parameters:
```bash
cp .env.example .env
```
Open `.env` and configure your **Neon PostgreSQL Database URL**:
```env
PORT=5000
DATABASE_URL=postgresql://<user>:<password>@<host>/<database>?sslmode=require
NODE_ENV=development
```

### 4. Running the Development Server
Run the application locally using esbuild hot-reloading:
```bash
npm run dev
```

---

## 📝 API Endpoint Reference

| HTTP Verb | Path | Middleware | Description | Status Code |
| :--- | :--- | :--- | :--- | :--- |
| **POST** | `/auth/signup` | `express.json()`, `logger` | Create a new user profile, hashing password | `201 Created` |
| **POST** | `/auth/login` | `express.json()`, `logger` | Login user (Placeholder) | `200 OK` |
| **GET** | `/auth/me` | `logger` | Fetch active user credentials (Placeholder) | `200 OK` |

---

## 📜 Coding Conventions & Best Practices
- **Conventional Commits:** Adhering to Semantic Git Commits (`feat(auth): ...`, `fix(middleware): ...`, `chore(config): ...`).
- **Dry-Run Compilation:** Compiling using `skipLibCheck` and `strict` type verification rules.
