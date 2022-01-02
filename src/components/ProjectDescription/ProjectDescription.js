import { convertNumberToTimeString } from "../../helpers";
import { Wrapper, Text, Content } from "./ProjectDescription.styles";

const ProjectDescription = ({ title, description, time, tasksStats }) => (
  <Wrapper>
    <Text>
      <h2>{title}</h2>
      <p>{description}</p>
    </Text>
    <Content>
      Timer: {convertNumberToTimeString(time)}
      TaskStats: Done: {tasksStats.done}
      Undone: {tasksStats.undone}
      Deleted: {tasksStats.deleted}
    </Content>
  </Wrapper>
);

export default ProjectDescription;
