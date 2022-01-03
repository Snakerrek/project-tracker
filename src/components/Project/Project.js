import ProjectDescription from "../ProjectDescription/ProjectDescription";
import ToDoList from "../ToDoList/ToDoList";

import { Wrapper, Content } from "./Project.styles";

const Project = ({ project, addTask }) => (
  <Wrapper backdrop={project.backdropPath}>
    <Content>
      <ProjectDescription
        title={project.title}
        description={project.description}
        time={project.time}
        tasksStats={project.tasksStats}
      />
      <ToDoList index={project.id} tasks={project.tasks} addTask={addTask} />
    </Content>
  </Wrapper>
);

export default Project;
