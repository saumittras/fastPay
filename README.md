# 📚 Fast Pay Digital Wallet System Backend

This is a backend server built with **Express**, **TypeScript**, **Mongoose**, and **MongoDB** to manage a library system. It supports features like managing books, borrowing books, and validation with centralized error handling.

---

## 🚀 Features

- CRUD operations for books and borrowings
- Validation with Mongoose
- Centralized global error handling
- Clean code with TypeScript interfaces
- Environment-based configuration
- RESTful API architecture

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB + Mongoose**
- **Dotenv**
- **ESLint + Prettier** (optional)

---

## 📁 Project Structure

```
src/
├── app.ts
├── server.ts
├── config/
| ├── books.controller.ts
├── controllers/
│ ├── books.controller.ts
│ └── borrow.controller.ts
├── models/
│ ├── books.model.ts
│ └── borrow.model.ts
├── interfaces/
│ ├── book.interface.ts
│ ├── borrow.interface.ts
│ └── error.interface.ts
├── errors/
│ ├── apiError.ts
│ └── handleValidationError.ts
├── middlewares/
│ └── globalErrorHandler.ts
└── routes/
├── books.route.ts
└── borrow.route.ts
```

---

## 📦 Installation

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/saumittras/fastPay.git
cd fastPay

```

### ✅ 2.Install Dependencies

```
npm install
```

### ✅ 3. Create `.env` File

<p>Create a .env file in the root and add:</p>

```
PORT=5000
NODE_ENV=development
MONGO_DB = Your_credintials

#JWT
JWT_ACCESS_SECRET = access_secret
JWT_ACCESS_EXPIRE = 1h
JWT_REFRESH_SECRET = JWT_REFRESH_SECRET
JWT_REFRESH_EXPIRE = 1d

#BCRYPT
BCRYPT_SALT_ROUND = 5

#SUPER_ADMIN
SUPER_ADMIN_EMAIL = super@admin.com
SUPER_ADMIN_PASSWORD = 'Your_credintials'
```

<p>You can replace DATABASE_URL with your own MongoDB Atlas URL as well.</p>

### ✅ 4. Build and Run

<p>Development Mode (with hot-reload):</p>

```
npm run dev
```

<p>Production Build:</p>

```
bash
Copy
Edit
npm run build
npm start
```

### 📬 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/books`     | Get all books       |
| GET    | `/api/books/:id` | Get a single book   |
| POST   | `/api/books`     | Create a new book   |
| PATCH  | `/api/books/:id` | Update a book by ID |
| DELETE | `/api/books/:id` | Delete a book by ID |

### User Create

| Method | Endpoint      | Description                   |
| ------ | ------------- | ----------------------------- |
| POST   | `/api/borrow` | Borrow a book                 |
| GET    | `/api/borrow` | Get summary of borrowed books |

### Important Links

GitHub Repository: <a href='https://github.com/saumittras/fastPay'>Link</a><br>
Live Deployment: <a href='fastpay-b5a5.vercel.app'>Link</a></br>
Explanation Video: <a href='https://drive.google.com/drive/folders/1jSynwgexK76BIwUbgvSenjC11EOYRTDD?usp=sharing'>Link</a>
Video Link: https://drive.google.com/drive/folders/1jSynwgexK76BIwUbgvSenjC11EOYRTDD?usp=sharing
Readme:<a href='https://github.com/saumittras/fastPay/blob/main/README.md'>Link</a>
Postman JSON:<a href='https://github.com/saumittras/fastPay/blob/main/Fast%20Pay.postman_collection.json'>Link</a>
