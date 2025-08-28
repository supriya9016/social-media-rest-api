# Social Media REST API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** that provides core features of a simple social media platform such as user authentication, post creation, and deletion.

---

## 🚀 Features

- **User Authentication**
  - Register new users with secure password hashing (bcrypt)
  - Login with JSON Web Tokens (JWT)
- **User Profile**
  - Fetch authenticated user details
- **Posts**
  - Create posts with title & description
  - Delete posts by ID
- **Security**
  - Protected routes using JWT authentication middleware
- **Validation**
  - Input validation with `express-validator`
- **Scalable**
  - Follows REST principles and a modular project structure

---

## 🛠 Tech Stack

- **Node.js** & **Express.js** – Server & routing  
- **MongoDB** & **Mongoose** – Database & ORM  
- **JWT** – Authentication  
- **bcrypt** – Password hashing  
- **express-validator** – Input validation  
- **dotenv** – Environment configuration  

---

## 📂 Project Structure

```

social\_media\_api/
├── models/
│   ├── user.js        # User schema & model
│   └── post.js        # Post schema & model
├── routes/
│   ├── users.js       # User routes (register, profile)
│   ├── auth.js        # Authentication routes (login)
│   └── posts.js       # Post routes (create, delete)
├── middleware/
│   └── auth.js        # JWT authentication middleware
├── config/
│   └── db.js          # Database connection
├── server.js          # Entry point
├── package.json
└── README.md

````

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed  
- [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or local MongoDB server)  
- [Postman](https://www.postman.com/) or any API client  

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/social-media-rest-api.git
   cd social-media-rest-api
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=3000
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

   The API will run at: `http://localhost:3000`

---

## 📌 API Endpoints

### **User Routes**

* `POST /api/register` → Register a new user
* `POST /api/authenticate` → Authenticate user & return JWT token
* `GET /api/user` → Get authenticated user profile (requires token)

### **Post Routes**

* `POST /api/posts` → Create a new post (requires token)
* `DELETE /api/posts/:id` → Delete a post by ID (requires token)

---

## 🔒 Authentication

* Add the JWT token in headers when accessing protected routes:

  ```
  Authorization: Bearer <your_token>
  ```


## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

```

