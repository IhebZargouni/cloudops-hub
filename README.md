# CloudOps Hub

**Production-ready Cloud Infrastructure Monitoring & Incident Management Platform**

CloudOps Hub is a full-stack platform designed to monitor cloud infrastructure, manage incidents, and provide a foundation for production-oriented DevOps practices.

The project is being developed incrementally, following professional software engineering and DevOps workflows, including version control, code quality automation, CI validation, containerization, infrastructure as code, cloud infrastructure, observability, and incident management.

---

## Tech Stack

### Application

* React
* Node.js
* Express
* TypeScript
* Prisma ORM

### Database

* MySQL 8.4

### DevOps & Infrastructure

* Docker
* Docker Compose
* AWS
* Terraform
* Kubernetes

### Development & CI/CD

* Git
* GitHub
* GitHub Issues
* GitHub Pull Requests
* GitHub Actions
* Husky
* lint-staged
* ESLint
* Prettier
* Commitlint
* Conventional Commits

---

# Development Progress

## Version 0.3.0 - Database Foundation

### Completed

* Backend initialized with Express and TypeScript
* Docker Compose configured
* MySQL 8.4 running in Docker
* Prisma ORM integrated
* Prisma configuration established
* Initial database migration created
* User model implemented
* Prisma Client generated
* Database connectivity verified through the health endpoint

### Current Backend Stack

* Node.js
* Express
* TypeScript
* Prisma ORM
* MySQL 8.4
* Docker Compose

### Current Database Models

* User

---

## Version 0.4.0 - Application Core

### Added

* Global error handling
* Centralized error middleware
* API response helper
* Custom `ApiError` class
* 404 / route-not-found middleware
* Health check endpoint
* Database connectivity verification
* Shared application utilities

### API Endpoints

#### Health Check

```http
GET /health
```

The health endpoint verifies that the API is running and that the database connection is available.

Successful response:

```json
{
  "status": "OK",
  "database": "Connected",
  "service": "CloudOps Hub API",
  "timestamp": "2026-08-11T00:00:00.000Z"
}
```

#### Error Handling Test

```http
GET /error
```

This endpoint is used to verify the centralized error-handling mechanism.

Example response:

```json
{
  "success": false,
  "message": "Example Error"
}
```

#### Unknown Routes

Undefined routes are handled by the `notFound` middleware.

Example response:

```json
{
  "success": false,
  "message": "Route not found"
}
```

### Benefits

* Centralized error management
* Consistent API responses
* Clear separation of concerns
* Improved maintainability
* Scalable application architecture

---

## Version 0.5.0 - Code Quality & Formatting

### Added

* ESLint configuration
* TypeScript ESLint integration
* Prettier configuration
* Prettier formatting checks
* ESLint validation script
* TypeScript build validation
* `.prettierignore`
* `.prettierrc`
* `eslint.config.mjs`

### Available Commands

```bash
npm run lint
```

Runs ESLint across the backend.

```bash
npm run format
```

Formats the source code using Prettier.

```bash
npm run format:check
```

Checks whether the project follows the configured Prettier rules.

```bash
npm run build
```

Compiles the TypeScript application and validates the TypeScript configuration.

### Benefits

* Consistent code style
* Automated linting
* Early detection of code-quality issues
* Reliable TypeScript compilation
* Reduced formatting-related changes during code review

---

## Version 0.6.0 - Git Workflow & Quality Gates

CloudOps Hub follows a **Git Flow-inspired development workflow**.

### Branch Strategy

* `main` - Stable, production-ready code
* `develop` - Integration branch for completed features
* `feature/*` - New features and improvements
* `release/*` - Release preparation
* `hotfix/*` - Production fixes

### Added

* GitHub Issues for task tracking
* Feature branch workflow
* Pull Request workflow
* Conventional Commits
* Commitlint
* Husky
* lint-staged
* Automated pre-commit validation
* Code-quality gates before commits

### Development Workflow

```text
GitHub Issue
     ↓
Feature Branch
     ↓
Implementation
     ↓
Local Validation
     ↓
Commit
     ↓
Push
     ↓
Pull Request
     ↓
CI Validation
     ↓
Review
     ↓
Merge into develop
```

### Pre-commit Workflow

```text
git commit
     ↓
Husky
     ↓
lint-staged
     ↓
ESLint
     ↓
Prettier
     ↓
Commitlint
     ↓
Commit Created
```

Invalid code or invalid commit messages are rejected before they can be committed.

### Validation

The pre-commit pipeline was deliberately tested with an intentional ESLint error.

The error was detected by ESLint through `lint-staged`, and the commit was rejected successfully.

This confirms that the local Git quality gate is functioning as expected.

---

## Version 0.7.0 - Continuous Integration

### Added

* GitHub Actions CI workflow
* Automated backend dependency installation
* Prisma Client generation
* Automated ESLint validation
* Automated Prettier validation
* Automated TypeScript build
* Node.js 22 CI environment

### CI Pipeline

The GitHub Actions workflow performs the following steps:

1. Checkout the repository
2. Set up Node.js 22
3. Install dependencies using `npm ci`
4. Generate Prisma Client
5. Run ESLint
6. Check Prettier formatting
7. Build the TypeScript application

### CI Workflow

```text
Pull Request / Push
        ↓
GitHub Actions
        ↓
Checkout Repository
        ↓
Node.js 22
        ↓
npm ci
        ↓
Prisma Generate
        ↓
ESLint
        ↓
Prettier
        ↓
TypeScript Build
        ↓
CI Result
```

### CI Triggers

The CI workflow is designed to validate changes when:

* A Pull Request targets `develop`
* A Pull Request targets `main`
* Changes are pushed to `develop`
* Changes are pushed to `main`

### CI Failure Protection

The CI process is designed to prevent invalid code from being integrated into protected branches.

The local quality pipeline was also tested using an intentional ESLint failure to verify that code-quality problems are detected before integration.

---

# Development Standards

## Conventional Commits

CloudOps Hub follows the **Conventional Commits** convention.

Examples:

```text
feat(api): add health endpoint
feat(database): add user model
fix(api): handle unknown routes
refactor(error): centralize error handling
style(backend): format code with Prettier
build(git): add Husky pre-commit hooks
ci(github): add backend CI workflow
test(ci): verify pipeline rejects lint errors
docs(readme): update development progress
```

### Commit Types

| Type       | Purpose                      |
| ---------- | ---------------------------- |
| `feat`     | New functionality            |
| `fix`      | Bug fixes                    |
| `refactor` | Code restructuring           |
| `style`    | Formatting and style changes |
| `test`     | Tests and validation         |
| `build`    | Build/tooling changes        |
| `ci`       | CI/CD changes                |
| `docs`     | Documentation                |

---

# Pull Request Workflow

Every feature should follow a controlled development workflow.

```text
GitHub Issue
     ↓
feature/*
     ↓
Implementation
     ↓
Local Quality Checks
     ↓
Commit
     ↓
Push
     ↓
Pull Request
     ↓
GitHub Actions
     ↓
Code Review
     ↓
Merge into develop
```

### Pull Request Standards

Each Pull Request should contain:

* Clear and descriptive title
* Summary of implemented changes
* Related GitHub Issue
* Validation performed
* Passing CI checks

### Branch Integration

```text
feature/* → develop
```

The `develop` branch serves as the integration branch.

Production releases will eventually follow:

```text
develop → main
```

---

# Quality Gates

CloudOps Hub uses multiple validation layers to maintain code quality.

## Local Quality Gate

```text
Code Change
     ↓
ESLint
     ↓
Prettier
     ↓
TypeScript Build
     ↓
Husky
     ↓
lint-staged
     ↓
Commitlint
     ↓
Git Commit
```

## Remote CI Gate

```text
Pull Request
     ↓
GitHub Actions
     ↓
npm ci
     ↓
Prisma Generate
     ↓
ESLint
     ↓
Prettier
     ↓
TypeScript Build
     ↓
CI Result
     ↓
Code Review / Merge
```

This provides two levels of protection:

* **Local validation** before changes are committed
* **Remote validation** before changes are integrated into the shared branches

---

# Backend Project Structure

```text
backend/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │   └── prisma.ts
│   │
│   ├── middlewares/
│   │   ├── error.middleware.ts
│   │   └── notFound.middleware.ts
│   │
│   ├── shared/
│   │   ├── errors/
│   │   │   └── apiError.ts
│   │   │
│   │   └── response/
│   │       └── apiResponse.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .husky/
│   └── pre-commit
│
├── eslint.config.mjs
├── .prettierrc
├── .prettierignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── ...
```

---

# Local Development

## Requirements

* Node.js 22+
* Docker
* Docker Compose
* Git

## Install Dependencies

The backend is maintained as a separate Node.js project inside the repository.

From the backend directory:

```bash
cd backend
npm ci
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Start Development Server

```bash
npm run dev
```

## Run ESLint

```bash
npm run lint
```

## Format Code

```bash
npm run format
```

## Check Formatting

```bash
npm run format:check
```

## Build the Application

```bash
npm run build
```

## Start the Production Build

```bash
npm start
```

---

# Environment & Database

The backend uses MySQL as its primary relational database and Prisma as the ORM.

Docker Compose is used to provide a reproducible local MySQL environment.

The database configuration is separated from application code through environment-based configuration.

Sensitive credentials and environment-specific values should not be committed to Git.

---

# Project Status

## Completed

* [x] Backend foundation
* [x] Express + TypeScript
* [x] Docker Compose
* [x] MySQL 8.4
* [x] Prisma ORM
* [x] Prisma configuration
* [x] Database migration
* [x] User model
* [x] Prisma Client generation
* [x] Database health check
* [x] Global error handling
* [x] Custom API error architecture
* [x] 404 handling
* [x] API response helper
* [x] ESLint
* [x] Prettier
* [x] TypeScript build validation
* [x] Husky
* [x] lint-staged
* [x] Conventional Commits
* [x] Commitlint
* [x] GitHub Issues workflow
* [x] Feature branch workflow
* [x] Pull Request workflow
* [x] GitHub Actions CI foundation
* [x] CI dependency installation
* [x] CI Prisma generation
* [x] CI ESLint validation
* [x] CI Prettier validation
* [x] CI TypeScript build validation
* [x] Local quality-gate failure testing

## Upcoming

* [ ] Automated application testing
* [ ] API integration tests
* [ ] Backend containerization
* [ ] Docker image optimization
* [ ] Container registry integration
* [ ] Kubernetes deployment
* [ ] Terraform infrastructure
* [ ] AWS infrastructure
* [ ] Continuous Deployment
* [ ] Application monitoring
* [ ] Infrastructure monitoring
* [ ] Logging and observability
* [ ] Incident management
* [ ] Alerting
* [ ] Production deployment

---

# Roadmap

```text
Database Foundation
        ↓
Application Core
        ↓
Code Quality
        ↓
Git Quality Gates
        ↓
Continuous Integration
        ↓
Automated Testing
        ↓
Docker Containerization
        ↓
Container Registry
        ↓
Kubernetes
        ↓
Infrastructure as Code
        ↓
AWS Infrastructure
        ↓
Continuous Deployment
        ↓
Monitoring & Observability
        ↓
Incident Management
        ↓
Production Platform
```

---

# Engineering Principles

CloudOps Hub is being developed with production-oriented engineering practices.

The project emphasizes:

* Clean and maintainable code
* Separation of concerns
* Automated quality checks
* Reproducible development environments
* Infrastructure as Code
* CI/CD automation
* Version-controlled infrastructure
* Secure configuration management
* Automated validation
* Incremental development
* Traceable changes through Issues and Pull Requests

---

# Project Goals

The long-term goal is to transform CloudOps Hub into a production-ready platform capable of:

* Monitoring cloud infrastructure
* Collecting infrastructure health information
* Detecting operational incidents
* Managing incident lifecycles
* Providing actionable alerts
* Centralizing operational information
* Supporting cloud-native deployments
* Demonstrating modern DevOps and Cloud engineering practices

---

# Current Status

**Active Development**

CloudOps Hub has completed its initial backend, database, application-core, code-quality, Git workflow, and Continuous Integration foundations.

The next development phases will focus on automated testing, containerization, infrastructure as code, AWS deployment, monitoring, observability, alerting, and incident management.

The project is being built incrementally with the objective of demonstrating a complete, production-oriented **Cloud Engineering + DevOps + Software Engineering** workflow.


---

## Version 0.8.0 — Automated Application Testing


### Added

- Vitest test runner

- Supertest HTTP assertions

- Automated API tests for:

  - Health check endpoint

  - Error handling endpoint

  - 404 / unknown route handling

- npm test command

- Test coverage configuration

- Automated test execution in GitHub Actions CI

## Test Command

```bash
npm test
```
## CI Integration

The GitHub Actions CI pipeline now validates:

1.Dependencies (npm ci)

2.Prisma Client generation

3.ESLint

4.Prettier formatting

5.Automated tests (npm test)

6.TypeScript build

## Security — CI Test Database

CloudOps Hub uses ephemeral test databases in CI pipelines for security and isolation.

## How It Works

Each CI run creates a fresh database with a unique name

Credentials are auto-generated using GITHUB_SHA

Database is isolated from all other runs

## Version 0.9.0 — Implement Ephemeral Test Database in CI

### Security — CI Test Database

CloudOps Hub uses ephemeral test databases in CI pipelines for security and isolation.

### How It Works

1- Each CI run creates a fresh database with a unique name

2- Credentials are auto-generated using GITHUB_SHA

3- Database is isolated from all other runs

4- Database is destroyed automatically after the run

### Benefits

- Security:	No credentials stored in the repository
- Isolation:	Each test run has its own isolated database
- Reproducibility:	Every CI run starts fresh
- Parallelism:	Multiple runs can happen simultaneously
- Cost:	No persistent infrastructure to maintain

### Technical Implementation

services:
  mysql:
    image: mysql:8.4
    env:
      MYSQL_ROOT_PASSWORD: root_${GITHUB_SHA}
      MYSQL_DATABASE: test_${GITHUB_SHA}
      MYSQL_USER: user_${GITHUB_SHA}
      MYSQL_PASSWORD: pass_${GITHUB_SHA}

      env:
  DATABASE_URL: mysql://user_${GITHUB_SHA}:pass_${GITHUB_SHA}@localhost:3306/test_${GITHUB_SHA}

  ## Version 0.10.0 — Docker Containerization

### Prerequisites

- Docker and Docker Compose installed
- Node.js 22 (for local development)
- Environment variables configured

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cloudops-hub.git
   cd cloudops-hub

## version 0.11.0 - Container Registry

CloudOps Hub images are published to Docker Hub.

### Images

| Image | Tags | Purpose |
|-------|------|---------|
| `username/cloudops-hub-backend` | `latest`, `develop`, `sha-xxxxx` | Backend application |

### Pulling the Image

```bash
# Pull the latest version
docker pull username/cloudops-hub-backend:latest

# Pull a specific version
docker pull username/cloudops-hub-backend:develop

# Pull a specific commit
docker pull username/cloudops-hub-backend:sha-xxxxx