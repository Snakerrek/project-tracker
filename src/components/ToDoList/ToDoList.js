import { useState } from "react";

import Task from "../Task/Task";
import ToDoForm from "../ToDoForm/ToDoForm";

import { Wrapper, Content } from "./ToDoList.styles";

const ToDoList = ({ index, tasks, addTask }) => {
  return (
    <Wrapper>
      <Content>
        <h2>To do list</h2>
        <ToDoForm index={index} addTask={addTask} />
        {tasks.map((task) => (
          <Task key={task.id} text={task.text} />
        ))}
      </Content>
    </Wrapper>
  );
};
export default ToDoList;
