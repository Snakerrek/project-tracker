import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.backdrop}), var(--darkGrey);
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 450px;
`;
