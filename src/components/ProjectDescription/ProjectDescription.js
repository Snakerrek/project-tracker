import TaskStats from "../TaskStats/TaskStats";
import Timer from "../Timer/Timer";

import { Wrapper, Text, Content } from "./ProjectDescription.styles";

const ProjectDescription = ({ title, description, time, tasksStats }) => (
  <Wrapper>
    <Text>
      <h2>{title}</h2>
      <p>{description}</p>
    </Text>
    <Content>
      <Timer time={time} />
      <TaskStats tasksStats={tasksStats} />
    </Content>
  </Wrapper>
);

export default ProjectDescription;
