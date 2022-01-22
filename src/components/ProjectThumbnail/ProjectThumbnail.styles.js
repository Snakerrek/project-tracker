import styled from "styled-components";
import defaultBackgroundImage from "../../images/default-bg-image.png";

export const Card = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.backdrop}), url(${defaultBackgroundImage});
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

  :hover {
    cursor: pointer;
  }

  h3 {
    font-size: var(--fontMedium);
    color: var(--white);
  }
`;
