import { useState } from "react";

import { Wrapper, Content, Button, Buttons } from "./Task.styles";

const Task = ({ text }) => (
  <Wrapper>
    <Content>
      <p>{text}</p>
      <Buttons>
        <Button complete>✔</Button>
        <Button>x</Button>
      </Buttons>
    </Content>
  </Wrapper>
);

export default Task;
