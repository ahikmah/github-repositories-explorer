# **GitHub Repositories Explorer**

![React](https://img.shields.io/badge/React-19-blue.svg?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?style=flat&logo=typescript) ![Vite](https://img.shields.io/badge/Vite-6-purple.svg?style=flat&logo=vite) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue.svg?style=flat&logo=tailwindcss) ![React Query](https://img.shields.io/badge/ReactQuery-5-orange.svg?style=flat&logo=reactquery) ![shadcn/ui](https://img.shields.io/badge/shadcn-UI-black.svg?style=flat) ![GitHub API](https://img.shields.io/badge/GitHubAPI-v3-black.svg?style=flat&logo=github)

### **🔍 About the Project**

This project is a **GitHub Repositories Explorer** built using **React, TypeScript, Vite, Tailwind, ShadCN, and React Query**.  
It allows users to:  
✅ **Search for GitHub users** by username  
✅ **View a user's repositories** with infinite scrolling  
✅ **Paginate through results smoothly**  
✅ **Improve UX with loading states & keyboard interactions**

📝 This project was created as part of the **PT ATASK TEKNOLOGI INTERNASIONAL** recruitment test.

---

## 📖 **Table of Contents**

- [🚀 Live Demo](#-live-demo)
- [🛠️ Features](#️-features)
- [💻 Running Locally](#-running-locally)
- [📌 Tech Stack](#-tech-stack)
- [📜 API Documentation](#-api-documentation)

---

## 🚀 **Live Demo**

🔗 [atask.ahikmah.com](https://atask.ahikmah.com)

---

## 🛠️ **Features**

✔ **Search for up to 5 GitHub users** matching a query  
✔ **Click on a user to view all repositories** (infinite scroll supported)  
✔ **Paginated results for better performance**  
✔ **Loading states & error handling**  
✔ **Keyboard events supported for search**

---

## 💻 **Running Locally**

### **1️⃣ Prerequisites**

- **Node.js** (>= 18) & **npm** (>= 9)
- **GitHub Personal Access Token** (for authenticated API requests)

### **2️⃣ Clone the Repository**

```sh
git clone https://github.com/ahikmah/github-repositories-explorer.git

cd github-repositories-explorer
```

### **3️⃣ Install Dependencies**

```sh
npm install
```

### **4️⃣ Create a `.env` File**

Create a `.env` file in the root directory and add:

```sh
VITE_BASE_PATH=/
VITE_GITHUB_TOKEN_API=your_github_token_here
```

> **Note:** A GitHub token prevents rate limits. [Create one here](https://github.com/settings/tokens).

### **5️⃣ Start the Development Server**

```sh
npm run dev
```

> The app will be available at **`http://localhost:8081/`**.

---

## 📌 **Tech Stack**

| Technology        | Description               |
| ----------------- | ------------------------- |
| **React**         | Frontend UI library       |
| **TypeScript**    | Strongly typed JavaScript |
| **Vite**          | Fast build tool           |
| **Tailwind CSS**  | Utility-first styling     |
| **shadcn/ui**     | Pre-styled UI components  |
| **React Query**   | Data fetching & caching   |
| **GitHub API v3** | Fetching user & repo data |

---

## 📜 **API Documentation**

This project uses the **GitHub REST API v3**:  
📄 [GitHub API Docs](https://developer.github.com/v3/)

- **Search Users**: `GET https://api.github.com/search/users?q={query}&per_page={per_page}&page={page}`
- **Get User Repositories**: `GET https://api.github.com/users/{username}/repos?per_page={per_page}&page={page}`
