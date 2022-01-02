import ProjectThumbnail from "../ProjectThumbnail/ProjectThumbnail";

import { Wrapper, Content } from "./ProjectList.styles";

const ProjectList = ({ projects }) => (
  <Wrapper>
    {projects.map((project) => (
      <ProjectThumbnail
        key={project.id}
        title={project.title}
        backdrop={project.backdropPath}
      />
    ))}
    <ProjectThumbnail key={10000} title={"Add"} />
  </Wrapper>
);

export default ProjectList;
