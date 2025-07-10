# Task 2 – Layered Architecture: Repositories, Services, Controllers

---

## 🧱 Objective

Build a clean, modular backend architecture using three distinct layers — **Repository**, **Service**, and **Controller** — for `User` and `Post` models, leveraging the concept of a **BaseRepository**.

---

## ✅ Task Overview

This task follows a 3-layered design pattern:

1. **Repository Layer** – Encapsulates all direct database operations using Sequelize.
2. **Service Layer** – Contains business logic, interfacing between controllers and repositories.
3. **Controller Layer** – Handles incoming API requests and interacts with the service layer.

---

## 🛠️ PR Workflow

This task should be completed in **3 Pull Requests** as described below:

---

### 📦 PR 1 – Repository Layer

- Create a generic `BaseRepository` with basic CRUD operations.
- Extend `BaseRepository` to create:
  - `UserRepository`
  - `PostRepository`
- Each should implement:
  - `create`
  - `findById`
  - `findAll`
  - `updateById`
  - `deleteById`

---

### 🧠 PR 2 – Service Layer

- Create:
  - `UserService` (uses `UserRepository`)
  - `PostService` (uses `PostRepository`)
- Service responsibilities:
  - Encapsulate all business logic.
  - Interact only with respective repository classes.

---

### 🌐 PR 3 – Controller Layer

- Create:
  - `UserController` (uses `UserService`)
  - `PostController` (uses `PostService`)
- Define Express routes for each resource:

```http
POST   /users
GET    /users
GET    /users/:id
PUT    /users/:id
DELETE /users/:id

POST   /posts
GET    /posts
GET    /posts/:id
PUT    /posts/:id
DELETE /posts/:id
