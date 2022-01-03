import ProjectThumbnail from "../ProjectThumbnail/ProjectThumbnail";

import { Wrapper, Content } from "./ProjectList.styles";

const ProjectList = ({ projects, addProject, onCurrentProjectChange }) => {
  return (
    <Wrapper>
      {projects.map((project, index) => (
        <ProjectThumbnail
          key={index}
          project={project}
          title={project.title}
          backdrop={project.backdropPath}
          onCurrentProjectChange={onCurrentProjectChange}
        />
      ))}
      <ProjectThumbnail key={10000} title={"Add"} addProject={addProject} />
    </Wrapper>
  );
};

export default ProjectList;
