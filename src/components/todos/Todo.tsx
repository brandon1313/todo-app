import { Select } from "antd";
import { Mentions } from "antd";
const { Option } = Mentions;
import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { TodoItem } from "./model/ITodoItem";
import TodoCreation from "./TodoCreation";
import TodoList from "./TodoList";

const Todo: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<TodoItem[]>("todos", []);
  const [filter, setFilter] = useState<string>("all");

  const addTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div>
      <TodoCreation addTodo={addTodo} />
      <Select
        defaultValue="all"
        style={{ width: 120, margin: "0 0 20px 20px" }}
        onChange={handleFilterChange}
      >
        <Option value="all">All</Option>
        <Option value="active">Active</Option>
        <Option value="completed">Completed</Option>
      </Select>
      <TodoList todos={getFilteredTodos()} toggleTodo={toggleTodo} />
    </div>
  );
};

export default Todo;
