import { useState } from "react";

import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import ProjectList from "./components/ProjectList/ProjectList";

import { GlobalStyle } from "./GlobalStyle";

const dummyProjectsData = [
  {
    id: 0,
    title: "Name of the project",
    description:
      "Description of the project-Description of the project-Description of the project-Description of the project",
    backdropPath:
      "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    time: 10453,
    tasks: [
      { id: 0, text: "Do something that you have to do", status: "undone" },
      {
        id: 1,
        text: "Do another thing that you have to do",
        status: "undone",
      },
    ],
    tasksStats: {
      done: 0,
      undone: 0,
      deleted: 0,
    },
  },
];

// localStorage tests
//window.localStorage.setItem("project", JSON.stringify(dummyProjectData));
//const newProject = JSON.parse(window.localStorage.getItem("project"));
//console.log(dummyProjectData);
//console.log(newProject);

// Or useLocalStorage hook

const App = () => {
  const [projects, setProjects] = useState(dummyProjectsData);
  const [currentProject, setCurrentProject] = useState(dummyProjectsData[0]);

  const addProject = (newProject) => {
    setProjects((prevState) => [...prevState, newProject]);
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
    console.log(projects);
  };

  return (
    <div className="App">
      <Header />
      <Project
        project={currentProject}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
      />
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
