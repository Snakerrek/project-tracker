import { useState } from "react";

import { Wrapper } from "./ToDoForm.styles";

const ToDoForm = ({ index, addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskId = new Date().getTime();

    addTask(index, {
      id: taskId,
      text: input,
      status: "undone",
    });

    setInput("");
  };
  return (
    <Wrapper>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add</button>
      </form>
    </Wrapper>
  );
};

export default ToDoForm;
