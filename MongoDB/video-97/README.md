# Express + MongoDB CRUD Mini Project

This project demonstrates a simple CRUD application built using:

- Node.js
- Express.js
- MongoDB & Mongoose
- EJS Template Engine

The app generates random employee data, stores it into MongoDB, and displays it in a dynamic HTML table. Users can generate and clear data using UI buttons.

---

## 📁 Project Structure

project-folder/
│
├── config/
│ └── db.js # MongoDB connection setup
│
├── models/
│ └── data.js # Mongoose Schema / Model
│
├── public/
│ └── table.ejs (or index.ejs) UI Table + Buttons
│
├── views/
│ └── index.ejs # EJS Template to show data dynamically
│
├── main.js # Main Express App
└── package.json

---

## Features

| Feature                      | Status |
| ---------------------------- | ------ |
| MongoDB Connection           | ✅     |
| Random Data Insert           | ✅     |
| Delete All Data              | ✅     |
| Display Data in Styled Table | ✅     |
| Routes Organized             | ✅     |
| Static UI + Buttons          | ✅     |

---

## 🎯 Route Endpoints

| Method | Endpoint    | Description                                      |
| ------ | ----------- | ------------------------------------------------ |
| GET    | `/`         | Shows dynamic employee table (EJS page)          |
| GET    | `/generate` | Deletes old data & inserts 10 random new records |
| GET    | `/clear`    | Deletes all records from DB                      |

---

## 🔧 Installation & Usage

### ✅ Clone the repository

```
git clone <repo-url>
cd project-folder
```

### ✅ Install dependencies

```
npm install

```

### ✅ Start MongoDB Server (if local)

```
mongod

```

### ✅ Run the App

```
npm run dev
```

### ✅ Open in Browser

```
Open in Browser
```

| Tech       | Usage                    |
| ---------- | ------------------------ |
| Express.js | Routing + Server         |
| MongoDB    | Database                 |
| Mongoose   | Schema + CRUD Operations |
| EJS        | Frontend Templating      |
| Nodemon    | Auto reload              |

### ✅ Future Enhancements

✅ Add Edit/Delete for each record

✅ Add POST form to insert custom data

✅ Add Sorting + Filtering options

✅ Add pagination & search functionality

✅ Move logic to Controller layer

### ✅ Developer

<h1 align="center">👋 Hi, I'm <strong>Shahrukh Ansari</strong></h1>

<h3 align="center">🚀 Full-Stack Developer</h3>

<p align="center">
  Passionate about building modern, scalable web apps with clean UI & powerful backend logic.
</p>

---

### 💡 What I Do

- 🧩 JavaScript | Node.js | Express.js  
- 🗄️ MongoDB | REST APIs  
- 🎨 HTML | CSS | Tailwind | UI/UX  
- 🛠️ Building real-world web applications  
- 📈 Learning daily & improving daily  

---

### 🌐 Connect with Me

📧 *Add contact details later…*  

⭐ If you like this — Don’t forget to give a star on GitHub!