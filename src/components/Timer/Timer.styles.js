import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 540px;
  background: red;
`;

export const Content = styled.div`
  h2 {
    margin: 20px;
    font-size: var(--fontBig);
    color: var(--white);
  }
  p {
    margin: 20px;
    font-size: var(--fontMedium);
    color: var(--lightGrey);
  }
`;
