import React, { useState } from "react";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { v1 as uuidv1 } from "uuid";
import { TodoItem } from "./model/ITodoItem";

interface TodoCreationProps {
  addTodo: (todo: TodoItem) => void;
}

const TodoCreation: React.FC<TodoCreationProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;
    const newTodo: TodoItem = {
      id: uuidv1(),
      text: inputValue,
      completed: false,
    };
    addTodo(newTodo);
    setInputValue("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <Input
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: "250px", marginRight: "10px" }}
        onPressEnter={handleAddTodo}
      />
      <Button type="primary" icon={<PlusOutlined />} onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
};

export default TodoCreation;
