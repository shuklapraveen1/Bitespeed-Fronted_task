# 🚀 Chatbot Flow Builder

A modern, extensible chatbot flow builder built using **React + TypeScript + React Flow**.

This project allows users to visually construct chatbot flows by dragging and connecting message nodes together.

🔗 **Live Demo:**  
https://bitespeed-fronted-task.vercel.app

---

## 📌 Features

### ✅ Text Node
- Drag and drop message nodes onto the canvas
- Each node contains editable message text
- Supports multiple nodes per flow

### ✅ Edge Connection Rules
- Each node can have **only one outgoing connection**
- A node can have multiple incoming connections
- Prevents invalid multiple source connections

### ✅ Settings Panel
- Selecting a node opens a settings panel
- Allows live editing of node message text
- Automatically updates the canvas in real-time

### ✅ Flow Validation
- Save button validates flow structure
- Shows error if:
  - More than one node exists
  - More than one node has no incoming connection

### ✅ Light / Dark Mode
- Toggle between themes
- Fully dynamic UI styling

### ✅ Premium UI
- Clean modern SaaS-style interface
- Responsive layout
- Styled using custom CSS (no heavy UI libraries)

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **React Flow**
- **Vite**
- **Vercel (Deployment)**

---

## 🏗 Project Structure


src/
│
├── components/
│ ├── nodes/
│ │ └── TextNode.tsx
│ │
│ ├── panels/
│ │ ├── NodesPanel.tsx
│ │ └── SettingsPanel.tsx
│
├── App.tsx
├── main.tsx
└── index.css


---

## 🧠 Architecture Decisions

### 🔹 Extensible Node System
The `nodeTypes` object allows easy addition of new node types in the future.

```ts
const nodeTypes = {
  textNode: TextNode,
};

This makes the system scalable for additional chatbot node types like:

Image nodes

Conditional nodes

API call nodes

Delay nodes

🔹 Controlled Edge Creation

Outgoing edge restriction is enforced during onConnect:

Prevents multiple outgoing connections

Ensures structured flow design

🔹 Dynamic Settings Panel

Instead of storing full node state, the system stores only:

selectedNodeId

This ensures:

Reactive updates

Clean state management

No stale state issues

🔹 Production-Ready Validation

Before saving:

The flow checks for multiple root nodes

Displays a user-friendly error banner

🚀 Getting Started Locally
1️⃣ Clone Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev

Open:

http://localhost:5173
📦 Build for Production
npm run build
🌐 Deployment

Deployed using Vercel.

Steps:

Push to GitHub

Import project in Vercel

Deploy

🎯 Future Improvements

Persist flows to localStorage

Export flow as JSON

Backend storage integration

Multiple node types

Drag preview enhancements

Keyboard shortcuts

Undo / Redo support

👨‍💻 Author

Praveen Shukla