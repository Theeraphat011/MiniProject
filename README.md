# 🌟 tainning 🌟

## 📖 Project Overview

This project is a simple web application with user registration, login, and an admin page. It includes both frontend and backend components.

## 📂 File Structure

- `index.html`: The home page with links to register and login.
- `register.html`: The registration page.
- `login.html`: The login page.
- `admin.html`: The admin page, accessible only after login.
- `css/style.css`: The stylesheet for the application.
- `js/register.js`: Handles the registration form submission.
- `js/login.js`: Handles the login form submission.
- `js/admin.js`: Handles the admin page logic.
- `backend/server.js`: The main server file.
- `backend/routes/auth.js`: Routes for authentication (register and login).
- `backend/routes/admin.js`: Route for the admin page.
- `backend/models/model.js`: Mongoose model for user data.
- `backend/middleware/middleware.js`: Middleware for authentication.
- `backend/controllers/auth.js`: Controllers for handling authentication logic.
- `backend/config/db.js`: Database connection configuration.
- `backend/package.json`: Project dependencies and scripts.
- `.gitignore`: Specifies files to be ignored by Git.

## 🛠️ Setup Instructions

### Frontend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Theeraphat011/tainning.git
   cd tainning
   ```

2. Open `index.html` in your browser to access the application.

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install backend dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI:
   ```env
   MONGO_URI=your_mongodb_uri
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

## 🚀 Usage

- **Home Page**: Navigate to `index.html` to access the home page with links to register and login.
- **Register**: Navigate to `register.html` to create a new account.
- **Login**: Navigate to `login.html` to log in to your account.
- **Admin Page**: After logging in, you will be redirected to `admin.html`, which is accessible only to authenticated users.

## 📋 API Endpoints

- **POST /api/register**: Register a new user.
- **POST /api/login**: Login a user and return a token.
- **POST /api/admin**: Access the admin page (requires authentication).

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt