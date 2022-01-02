import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.45) 100%
    ),
    url(${(props) => props.backdrop}), var(--darkGrey);
  background-size: cover;
  background-position: center;
  width: 320px;
  height: 180px;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: var(--fontMedium);
    color: var(--white);
  }
`;
