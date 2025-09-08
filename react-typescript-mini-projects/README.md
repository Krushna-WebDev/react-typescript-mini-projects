# React Todo & Crypto Tracker

A combined **React + TypeScript project** featuring:

- **Todo App**: Add, delete, toggle, and filter tasks.
- **Crypto Tracker**: Display multiple cryptocurrencies with price and 24h change. Conditional styling for gains/losses.

---

## Features

### Todo App
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Completed, Pending)
- Organized components (`Todo.tsx`, `TodoItem.tsx`)

### Crypto Tracker
- Display array of cryptocurrencies
- Conditional styling: green for positive change, red for negative
- Hover effects for better UI
- Reusable `CryptoCard` component

---

## Tech Stack
- React
- TypeScript
- Tailwind CSS

---

## Folder Structure
```
src/
 ┣ features/
 ┃ ┣ todo/
 ┃ ┃ ┣ Todo.tsx
 ┃ ┃ ┣ TodoItem.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┗ crypto/
 ┃   ┣ CryptoCard.tsx
 ┃   ┣ CryptoList.tsx
 ┃   ┗ index.ts
 ┣ App.tsx
 ┣ main.tsx
```

---

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/<username>/react-todo-crypto.git
```

2. Navigate to project folder
```bash
cd react-todo-crypto
```

3. Install dependencies
```bash
npm install
```

4. Run the project
```bash
npm run dev
```

---

## Notes
- Day-2 project of learning React + TypeScript
- Minimal AI guidance used only for design clarification
- Project structured for **clean folder separation** and **reusable components**
- This project is **only for practice to improve my skills**
