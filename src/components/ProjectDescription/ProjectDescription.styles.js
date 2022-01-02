import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 540px;
  max-height: 380px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.div`
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

export const Content = styled.div``;
