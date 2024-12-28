# Prodigy Internship Task

## Overview
This project demonstrates the implementation of a user authentication and authorization system using JSON Web Tokens (JWT) along with a persistent database integration. It includes user registration, login, hashed password storage, role-based access control, and protected routes.

## Features
- **User Registration and Login:**
  - Register new users with unique email addresses.
  - Log in with email and password to receive a JWT.

- **Password Security:**
  - User passwords are hashed using `bcrypt` for secure storage.

- **JWT-Based Authentication:**
  - Generate JWT tokens for logged-in users.
  - Validate and verify tokens to access protected routes.

- **Role-Based Access Control:**
  - Differentiate user roles (e.g., admin, user, owner) to restrict access to certain endpoints.

- **Database Integration:**
  - Use MySQL as the database with Sequelize ORM for handling models and queries.
  - Database schema managed using migrations.

## Requirements
- Node.js
- MySQL
- `dotenv`, `express`, `bcrypt`, `jsonwebtoken`, `sequelize`, `mysql2`

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=user_management
   JWT_SECRET=your_jwt_secret
   ```

4. Set up the database:
   Ensure your MySQL server is running, and execute the Sequelize migration:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Usage
1. Start the server:
   ```bash
   npm start
   ```
