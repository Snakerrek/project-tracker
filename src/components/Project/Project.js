import Timer from "../Timer/Timer";
import ToDoList from "../ToDoList/ToDoList";

import { Wrapper, Content } from "./Project.styles";

const Project = ({ project }) => (
  <Wrapper backdrop={project.backdropPath}>
    <Content>
      <Timer title={project.title} description={project.description} />
      <ToDoList />
    </Content>
  </Wrapper>
);

export default Project;
