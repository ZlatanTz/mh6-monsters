# MH6 Monsters 🐉

A full-stack web application for managing monsters and their species in a Monster Hunter-inspired universe. Built using **PostgreSQL**, **Express**, and a **Vanilla JS + React-style** frontend, the app provides full CRUD functionality.

---

## 🔥 Features

- View a list of all monsters with images
- Create, update, and delete monsters
- Assign monsters to a species
- Dynamic image URLs based on monster names
- Modular, component-based frontend
- RESTful API with PostgreSQL-backed data

---

## 🧱 Tech Stack

| Layer       | Tech                        |
|------------|-----------------------------|
| Frontend   | HTML, CSS, JavaScript (React-style components) |
| Backend    | Node.js, Express             |
| Database   | PostgreSQL                   |
| Other      | Axios, dotenv, CORS          |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ZlatanTz/mh6-monsters.git
cd mh6-monsters
```

### 2. Set Up the Database

Make sure PostgreSQL is running locally.

```bash
createdb mh6monsters
psql mh6monsters < schema.sql
```

---

### 3. Configure the Backend

Inside the `server/` directory, create a `.env` file:

```env
DATABASE_URL=postgresql://youruser:yourpassword@localhost:5432/mh6monsters
PORT=2501
```

Install dependencies and run the server:

```bash
cd server
npm install
npm start
```

The backend will run on `http://localhost:2501`.

---

### 4. Run the Frontend

You can use a static server or open `client/index.html` directly in the browser.

> **Note:** Make sure CORS origin (`http://localhost:5173`) matches your frontend port or file protocol in `server/index.js`.

---

## 🗂️ File Structure

```
mh6-monsters/
│
├── client/                   # Frontend components
│   ├── App.jsx              # Main app logic
│   └── components/
│       ├── Form.jsx         # Monster creation form
│       ├── Monster.jsx      # Monster display and update form
│       └── SpeciesInput.jsx # Dropdown for species selection
│
├── server/                  # Express server
│   ├── db/
│   │   └── queries/         # DB queries (PostgreSQL)
│   ├── routes/              # API endpoints
│   └── index.js             # Main server entry
│
├── schema.sql               # DB schema
└── README.md                # You are here
```

---

## 🧪 API Endpoints

### Monsters

- `GET /monsters` – Get all monsters
- `POST /monsters` – Add a monster
- `PUT /monsters/:id` – Update a monster
- `DELETE /monsters/:id` – Delete a monster

### Species

- `GET /species` – Get all species

---

## 🖼️ Image URL Format

The app dynamically generates image URLs using the monster’s name:

```
https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/{monster_name}_monsters_mhwilds_wiki_guide200px.png
```

Spaces are replaced with underscores and the name is lowercased.

---

## 👨‍💻 Author

- [ZlatanTz](https://github.com/ZlatanTz)

---

