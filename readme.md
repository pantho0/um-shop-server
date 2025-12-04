# 🛒 UMSHOP Backend – Role-Based E-commerce REST API

A secure and scalable **eCommerce backend system** built with **Node.js**, **Express**, and **TypeScript**, featuring **JWT authentication**, **Role-Based Access Control**, **Slugify-based automatic product slugging**, and **Nodemailer-powered password reset system**.

[![Live SITE](https://umshop.vercel.app/)](#)
[![Requirement Analysis](https://img.shields.io/badge/Requirement%20Analysis-View%20Docs-lightgrey?style=for-the-badge)](https://docs.google.com/document/d/1LdsUhhlyoZdZhl6cM83V-t7SGxNzBiJsgvi47d0dUZw/edit?usp=sharing)

## This backend powers a complete eCommerce infrastructure with secure authentication, product management, order handling, and user administration.

## 📘 System Diagram (Architecture Overview)

A clean modular backend architecture ensuring scalability and maintainability.

![UMSHOP Backend Architecture](./docs/UMSHOP.png)

---

## 💻 Tech Stack

UMSHOP Backend is designed using modern server-side technologies ensuring high performance, security, and clean code standards.

### **Core Technologies**

| Component          | Technologies Used     |
| :----------------- | :-------------------- |
| **Runtime**        | Node.js               |
| **Framework**      | Express.js            |
| **Language**       | TypeScript            |
| **Authentication** | JSON Web Tokens (JWT) |
| **Email Service**  | Nodemailer            |
| **Slug Generator** | Slugify               |
| **Database**       | MongoDB               |

---

### **Tools & Libraries**

|                                                                                                           |                                                                                                                  |                                                                                                                   |
| :-------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
|  ![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  |   ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)    | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
|  ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)   | ![Nodemailer](https://img.shields.io/badge/Nodemailer-00916E?style=for-the-badge&logo=maildotru&logoColor=white) |     ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)      |
| ![Slugify](https://img.shields.io/badge/Slugify-4A5568?style=for-the-badge&logo=markdown&logoColor=white) |                  ![Zod](https://img.shields.io/badge/Zod-3E8E41?style=for-the-badge&logo=none)                   |                ![Bcrypt](https://img.shields.io/badge/Bcrypt-2C5282?style=for-the-badge&logo=none)                |

---

## 🚀 Features

### 🔑 **User Authentication & Security**

- JWT-based secure login and registration
- Strong password hashing using bcrypt
- Secure role-based access system:
  - **Admin**
  - **Customer**

- Authorization middleware guarding admin routes

---

### 🧑‍💼 **User Management**

- Register, login, and user profile operations
- Admin can manage all users
- Forgot and Reset password via Nodemailer

---

### 📦 **Product Management**

- Full CRUD for Admin
- Public read-only endpoints
- Automatic slug creation using **Slugify**
- Image, price, stock, and category support

---

### 📦 **Order Management**

- Customers can place orders
- Admin can update order status (`pending`, `processing`, `completed`)
- Transaction and shipping details supported

---

### 🧩 **Modular Architecture**

- Organized into:
  - Controllers
  - Routes
  - Services
  - Middleware
  - Utils
  - Config-driven environment system

---

<p align="center">
  <img src="https://img.shields.io/badge/ACTION%20REQUIRED-Create%20a%20.env%20file%20and%20follow%20.env.example-red?style=for-the-badge&labelColor=black"/>
</p>

---

## 🛠️ Project Setup

### **Prerequisites**

- Node.js v18+
- MongoDB running locally or in the cloud
- npm or yarn

---

## POSTMAN COLLECTION FOR API TESTING

<a href="https://postman.co/workspace/My-Workspace~e3a200b6-82da-4bdb-8199-62c7e7d6092a/collection/32753226-ae586a8c-9b51-41aa-a476-a0e8524c6bc7?action=share&creator=32753226&active-environment=32753226-463cd41c-98df-41c5-9b05-da4cb4b5c3df">
  <img src="https://cdn.worldvectorlogo.com/logos/postman.svg" width="70" />
</a>

## 📥 Clone the Repository

```bash
git clone https://github.com/pantho0/um-shop-server.git
cd umshop-backend
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## ⚙️ Environment Setup

```bash
cp .env.example .env
```

Fill variables:

- MONGODB_URI
- JWT_SECRET
- EMAIL_USERNAME
- EMAIL_PASSWORD
- CLIENT_URL

---

## ▶️ Run the Development Server

```bash
npm run dev
```

---

## 🚀 Production Build

```bash
npm run build
npm run start
```
