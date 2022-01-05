import { useState } from "react";

import { Wrapper, Content, Button, Buttons } from "./Task.styles";

const Task = ({ task, changeTaskStatus, index }) => (
  <Wrapper>
    <Content>
      <p>{task.text}</p>
      <Buttons>
        <Button
          onClick={() => changeTaskStatus(index, task.id, "done")}
          complete
        >
          ✔
        </Button>
        <Button onClick={() => changeTaskStatus(index, task.id, "deleted")}>
          x
        </Button>
      </Buttons>
    </Content>
  </Wrapper>
);

export default Task;
