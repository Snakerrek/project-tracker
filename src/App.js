import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import { GlobalStyle } from "./GlobalStyle";

const dummyProjectData = {
  title: "Name of the project",
  description:
    "Description of the project-Description of the project-Description of the project-Description of the project",
  backdropPath:
    "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  time: 10453,
  tasks: [
    { text: "Do something that you have to do", status: "not-done" },
    { text: "Do another thing that you have to do", status: "not-done" },
  ],
};

const App = () => (
  <div className="App">
    <Header />
    <Project project={dummyProjectData} />
    <GlobalStyle />
  </div>
);

export default App;
