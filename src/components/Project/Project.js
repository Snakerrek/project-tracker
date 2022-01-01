import { Wrapper, Content } from "./Project.styles";

const Project = ({ name, backdropPath }) => (
  <Wrapper backdrop={backdropPath}>
    <Content>
      <h2>{name}</h2>
    </Content>
  </Wrapper>
);

export default Project;
