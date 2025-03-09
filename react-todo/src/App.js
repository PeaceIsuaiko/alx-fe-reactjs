import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./components/TodoList"; // ✅ Corrected import path

function App() {
  return (
    <div>
      <h1>React Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
