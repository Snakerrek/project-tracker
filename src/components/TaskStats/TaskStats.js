import { Wrapper } from "./TaskStats.styles";

import ProgressBar from "../ProgressBar/ProgressBar";

// TODO: add progress bar displaying how much of tasks are done, don't count deleted ones.

const TaskStats = ({ tasksStats }) => (
  <Wrapper>
    <p> Tasks: </p>
    <ProgressBar
      value={tasksStats.done}
      max={tasksStats.done + tasksStats.undone}
    />
    <p>
      {tasksStats.done}/{tasksStats.undone + tasksStats.done}
    </p>
  </Wrapper>
);

export default TaskStats;
