import { Wrapper, Content } from "./TaskStats.styles";

const TaskStats = ({ tasksStats }) => (
  <Wrapper>
    <Content>
      TaskStats: Done: {tasksStats.done}
      Undone: {tasksStats.undone}
      Deleted: {tasksStats.deleted}
    </Content>
  </Wrapper>
);

export default TaskStats;
