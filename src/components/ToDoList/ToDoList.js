import { useState } from "react";

import Task from "../Task/Task";
import ToDoForm from "../ToDoForm/ToDoForm";

import { Wrapper, Content } from "./ToDoList.styles";

const ToDoList = ({ index, tasks, addTask, changeTaskStatus }) => {
  return (
    <Wrapper>
      <Content>
        <h2>To do list</h2>
        <ToDoForm index={index} addTask={addTask} />
        {tasks.map(
          (task) =>
            task.status === "undone" && (
              <Task
                key={task.id}
                task={task}
                changeTaskStatus={changeTaskStatus}
                index={index}
              />
            )
        )}
      </Content>
    </Wrapper>
  );
};
export default ToDoList;
