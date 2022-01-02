import { Wrapper, Content } from "./TaskStats.styles";

const TaskStats = ({ tasksStats }) => (
  <Wrapper>
    <Content>
      <p>Tasks Done: {tasksStats.done}</p>
      <p>Tasks in progress: {tasksStats.undone}</p>
      <p>Tasks deleted: {tasksStats.deleted}</p>
    </Content>
  </Wrapper>
);

export default TaskStats;
