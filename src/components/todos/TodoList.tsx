import React from "react";
import { List, Checkbox } from "antd";
import { TodoItem } from "./model/ITodoItem";

interface TodoListProps {
  todos: TodoItem[];
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <List
      style={{ marginTop: "20px" }}
      bordered
      dataSource={todos}
      renderItem={(item) => (
        <List.Item>
          <Checkbox
            checked={item.completed}
            onChange={() => toggleTodo(item.id)}
          >
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
          </Checkbox>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
