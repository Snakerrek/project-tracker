import TaskStats from "../TaskStats/TaskStats";
import Timer from "../Timer/Timer";

import { Wrapper, Text, Content } from "./ProjectDescription.styles";

const ProjectDescription = ({ project, tasksStats, saveTimerValue }) => (
  <Wrapper>
    <Text>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </Text>
    <Content>
      <Timer
        index={project.id}
        time={project.time}
        saveTimerValue={saveTimerValue}
      />
      <TaskStats tasksStats={tasksStats} />
    </Content>
  </Wrapper>
);

export default ProjectDescription;
