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
      { id: 0, text: "Do something that you have to do", status: "not-done" },
      {
        id: 1,
        text: "Do another thing that you have to do",
        status: "not-done",
      },
    ],
    tasksStats: {
      done: 0,
      undone: 0,
      deleted: 0,
    },
  },
  {
    id: 1,
    title: "Name of the project",
    description:
      "Description of the project-Description of the project-Description of the project-Description of the project",
    backdropPath:
      "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    time: 10453,
    tasks: [
      { id: 0, text: "Do something that you have to do", status: "not-done" },
      {
        id: 1,
        text: "Do another thing that you have to do",
        status: "not-done",
      },
    ],
    tasksStats: {
      done: 0,
      undone: 0,
      deleted: 0,
    },
  },
  {
    id: 2,
    title: "Name of the project",
    description:
      "Description of the project-Description of the project-Description of the project-Description of the project",
    backdropPath:
      "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    time: 10453,
    tasks: [
      { id: 0, text: "Do something that you have to do", status: "not-done" },
      {
        id: 1,
        text: "Do another thing that you have to do",
        status: "not-done",
      },
    ],
    tasksStats: {
      done: 0,
      undone: 0,
      deleted: 0,
    },
  },
  {
    id: 3,
    title: "Name of the project",
    description:
      "Description of the project-Description of the project-Description of the project-Description of the project",
    backdropPath:
      "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    time: 10453,
    tasks: [
      { id: 0, text: "Do something that you have to do", status: "not-done" },
      {
        id: 1,
        text: "Do another thing that you have to do",
        status: "not-done",
      },
    ],
    tasksStats: {
      done: 0,
      undone: 0,
      deleted: 0,
    },
  },
  {
    id: 4,
    title: "Name of the project",
    description:
      "Description of the project-Description of the project-Description of the project-Description of the project",
    backdropPath:
      "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    time: 10453,
    tasks: [
      { id: 0, text: "Do something that you have to do", status: "not-done" },
      {
        id: 1,
        text: "Do another thing that you have to do",
        status: "not-done",
      },
    ],
    tasksStats: {
      done: 0,
      undone: 0,
      deleted: 0,
    },
  },
  {
    id: 5,
    title: "Name of the project Name of the project Name of the project",
    description:
      "Description of the project-Description of the project-Description of the project-Description of the project",
    backdropPath:
      "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    time: 10453,
    tasks: [
      { id: 0, text: "Do something that you have to do", status: "not-done" },
      {
        id: 1,
        text: "Do another thing that you have to do",
        status: "not-done",
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

const App = () => (
  <div className="App">
    <Header />
    <Project project={dummyProjectsData[0]} />
    <ProjectList projects={dummyProjectsData} />
    <GlobalStyle />
  </div>
);

export default App;
