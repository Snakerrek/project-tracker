import { Wrapper, Content } from "./TaskStats.styles";

// TODO: add progress bar displaying how much of tasks are done, don't count deleted ones.

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
