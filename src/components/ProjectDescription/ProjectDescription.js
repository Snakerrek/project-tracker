import { Wrapper, Content } from "./ProjectDescription.styles";

const ProjectDescription = ({ title, description }) => (
  <Wrapper>
    <Content>
      <h2>{title}</h2>
      <p>{description}</p>
    </Content>
  </Wrapper>
);

export default ProjectDescription;
