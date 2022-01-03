import AddProjectModal from "../AddProjectModal/AddProjectModal";

import { Card } from "./ProjectThumbnail.styles";

const ProjectThumbnail = ({ title, backdrop }) => {
  return (
    <Card backdrop={backdrop}>
      <h3>{title === "Add" ? <AddProjectModal /> : title}</h3>
    </Card>
  );
};

export default ProjectThumbnail;
