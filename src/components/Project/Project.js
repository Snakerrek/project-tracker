import ProjectDescription from "../ProjectDescription/ProjectDescription";
import ToDoList from "../ToDoList/ToDoList";

import { Wrapper, Content } from "./Project.styles";

const Project = ({ project, addTask, changeTaskStatus, saveTimerValue }) => (
  <Wrapper backdrop={project.backdropPath}>
    <Content>
      <ProjectDescription
        project={project}
        saveTimerValue={saveTimerValue}
        tasksStats={project.tasksStats}
      />
      <ToDoList
        index={project.id}
        tasks={project.tasks}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
      />
    </Content>
  </Wrapper>
);

export default Project;
