# 🛒 UMSHOP Backend – Role-Based E-commerce REST API

A secure and scalable eCommerce backend built with **Node.js**, **Express**, and **TypeScript**, featuring **JWT-based authentication**, **Role-Based Access Control**, **Slugify automation**, and **Nodemailer-powered password reset**.

---

## 🚀 Live Demo & Documentation

[![Live Site](https://umshop.vercel.app/)](#)
[![Requirement Analysis](https://docs.google.com/document/d/1LdsUhhlyoZdZhl6cM83V-t7SGxNzBiJsgvi47d0dUZw/edit?usp=sharing)](./docs/UMSHOP.png)

---

## 💻 Tech Stack

This backend is designed using modern server-side technologies to ensure security, maintainability, and performance.

### **Core Technologies**

| Component          | Technologies Used    |
| ------------------ | -------------------- |
| **Runtime**        | Node.js              |
| **Framework**      | Express.js           |
| **Language**       | TypeScript           |
| **Authentication** | JWT (JSON Web Token) |
| **Email Service**  | Nodemailer           |
| **Slug Generator** | Slugify              |

---

### **Tools & Libraries**

|                                                                                                           |                                                                                                                |                                                                                                                   |
| :-------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
|  ![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  |  ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)   | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
|  ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)   | ![Nodemailer](https://img.shields.io/badge/Nodemailer-00916E?style=for-the-badge&logo=mail.ru&logoColor=white) |     ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)      |
| ![Slugify](https://img.shields.io/badge/Slugify-4A5568?style=for-the-badge&logo=markdown&logoColor=white) |                 ![Zod](https://img.shields.io/badge/Zod-3E8E41?style=for-the-badge&logo=none)                  |                ![Bcrypt](https://img.shields.io/badge/Bcrypt-2C5282?style=for-the-badge&logo=none)                |

---

## 🔑 Key Features

### 🔐 **Role-Based Access Control (RBAC)**

- Admin & Customer roles.
- Middleware-secured admin routes.
- JWT-based secure authentication.

### 🧑‍💼 **User Authentication**

- Register / Login using JWT.
- Password hashed using bcrypt.
- Forgot Password & Reset Password using Nodemailer.

### 📦 **Product Management**

- Admin CRUD operations.
- Automated product slug generation using Slugify.
- Public product browsing API.

### 🛍 **Order Management**

- Customers can place orders.
- Admin can manage orders & change statuses.

### ⚙️ **Modular Architecture**

- Controllers
- Routes
- Services
- Middleware
- Configurable Env System

---

## 🛠️ Project Setup

### **Prerequisites**

- Node.js v18+
- npm

### **Installation**

```bash
# Clone repository
git clone https://github.com/pantho0/um-shop-server.git
cd umshop-backend

# Install dependencies
npm install

# Create env file
cp .env.example .env

# Run in development
npm run dev
```
