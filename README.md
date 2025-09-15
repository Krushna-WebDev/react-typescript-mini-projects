# React Todo & Crypto Tracker

A combined **React + TypeScript project** featuring:

- **Todo App**: Add, delete, toggle, and filter tasks.
- **Crypto Tracker**: Cryptocurrency data fetched from CoinGecko API with Redux state management.

---

## Features

### Todo App
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Completed, Pending)
- Organized components (`Todo.tsx`, `TodoItem.tsx`)

### Crypto Tracker
- One-time data fetch from CoinGecko API
- Redux + TypeScript state management
- Sort cryptocurrencies by price
- Display price and 24h change
- Conditional styling for price movements (green/red)
- Note: Not real-time data (static fetch)

---

## Tech Stack
- React
- TypeScript
- Redux Toolkit
- CoinGecko API
- Tailwind CSS

---

## API Implementation
```typescript
// One-time fetch on component mount
useEffect(() => {
  dispatch(getdata());
}, []);
```

## State Management
- Redux store with TypeScript
- Async thunks for API calls
- Price-based sorting functionality
- Static data management (no WebSocket/real-time updates)

---

## Folder Structure
```
src/
 ┣ components/
 ┃ ┣ Crypto/
 ┃ ┃ ┗ Crypto.tsx
 ┃ ┗ Todo/
 ┃   ┣ Todo.tsx
 ┃   ┗ TodoTs.tsx
 ┣ store/
 ┃ ┣ slices/
 ┃ ┃ ┗ cryptoSlice.ts
 ┃ ┗ store.ts
 ┣ App.tsx
 ┣ main.tsx
```

---

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Krushna-WebDev/react-typescript-mini-projects.git
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
- Integration with CoinGecko API (static fetch, not real-time)
- Redux implementation with TypeScript for practice
- Price-based sorting functionality
- Type-safe state management
- This project is **for learning and practicing TypeScript with Redux**