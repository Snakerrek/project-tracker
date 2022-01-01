import { useState } from "react";

import Task from "../Task/Task";
import ToDoForm from "../ToDoForm/ToDoForm";

import { Wrapper, Content } from "./ToDoList.styles";

const ToDoList = ({ tasks }) => {
  const [todos, setTodos] = useState(tasks);

  const addTodo = (todo) => {
    if (!todo.text) return;

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  return (
    <Wrapper>
      <Content>
        <h2>To do list</h2>
        <ToDoForm onSubmit={addTodo} />
        {todos.map((todo) => (
          <Task key={todo.id} text={todo.text} />
        ))}
      </Content>
    </Wrapper>
  );
};
export default ToDoList;
