import { Card } from "./ProjectThumbnail.styles";

const ProjectThumbnail = ({ title, backdrop }) => {
  const addProject = () => {
    console.log("New project has been added");
  };

  return (
    <Card backdrop={backdrop}>
      <h3>
        {title === "Add" ? <button onClick={addProject}>+</button> : title}
      </h3>
    </Card>
  );
};

export default ProjectThumbnail;
