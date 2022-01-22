import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import ProjectList from "./components/ProjectList/ProjectList";

import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const [projects, setProjects] = useLocalStorage("projects", []);
  const [currentProject, setCurrentProject] = useState(
    projects.length !== 0 ? projects[0] : {}
  );

  const addProject = (newProject) => {
    setProjects((prevState) => [...prevState, newProject]);
    setCurrentProject(newProject);
  };

  const addTask = (index, task) => {
    let newData = [...projects];
    newData[index].tasks.unshift(task);
    newData[index].tasksStats.undone += 1;
    setProjects(newData);
  };

  const changeTaskStatus = (index, taskId, updatedStatus) => {
    let newData = [...projects];
    let indexOfTask = newData[index].tasks.findIndex(
      (task) => task.id === taskId
    );
    newData[index].tasks[indexOfTask].status = updatedStatus;
    if (updatedStatus === "done") {
      newData[index].tasksStats.done += 1;
    } else if (updatedStatus === "deleted") {
      newData[index].tasksStats.deleted += 1;
    }
    newData[index].tasksStats.undone -= 1;
    setProjects(newData);
  };

  const saveTimerValue = (index, newTime) => {
    let newData = [...projects];
    newData[index].time = newTime;
    setProjects(newData);
  };

  return (
    <div className="App">
      <Header text={"Project Tracker"} />
      {projects.length !== 0 && (
        <Project
          project={currentProject}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
          saveTimerValue={saveTimerValue}
        />
      )}
      <ProjectList
        projects={projects}
        addProject={addProject}
        onCurrentProjectChange={setCurrentProject}
      />
      <GlobalStyle />
    </div>
  );
};

export default App;
