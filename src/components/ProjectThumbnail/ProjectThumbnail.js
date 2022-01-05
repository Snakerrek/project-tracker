import AddProjectModal from "../AddProjectModal/AddProjectModal";

import { Card } from "./ProjectThumbnail.styles";

const ProjectThumbnail = ({
  project,
  title,
  backdrop,
  addProject,
  onCurrentProjectChange,
  numberOfProjects,
}) => {
  return (
    <div>
      {title === "Add" ? (
        <Card backdrop={backdrop}>
          <h3>
            <AddProjectModal
              addProject={addProject}
              numberOfProjects={numberOfProjects}
            />
          </h3>
        </Card>
      ) : (
        <div onClick={() => onCurrentProjectChange(project)}>
          <Card backdrop={backdrop}>
            <h3>{title}</h3>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProjectThumbnail;
