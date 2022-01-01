import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ backdrop }) => (backdrop ? `url(${backdrop})` : "#000")};
  background-size: cover;
  background-position: center;
  height: 500px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  padding: 20px;
  margin: 0 auto;
`;
