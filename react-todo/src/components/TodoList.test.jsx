import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import "@testing-library/jest-dom";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add new todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("❌")[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
