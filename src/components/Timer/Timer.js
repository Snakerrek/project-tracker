import { Wrapper, Content } from "./Timer.styles";

const Timer = ({ title, description }) => (
  <Wrapper>
    <Content>
      <h2>{title}</h2>
      <p>{description}</p>
    </Content>
  </Wrapper>
);

export default Timer;
