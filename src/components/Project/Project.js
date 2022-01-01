import ProjectDescription from "../ProjectDescription/ProjectDescription";
import ToDoList from "../ToDoList/ToDoList";

import { Wrapper, Content } from "./Project.styles";

const Project = ({ project }) => (
  <Wrapper backdrop={project.backdropPath}>
    <Content>
      <ProjectDescription
        title={project.title}
        description={project.description}
      />
      <ToDoList />
    </Content>
  </Wrapper>
);

export default Project;
