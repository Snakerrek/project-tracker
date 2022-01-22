import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  h2 {
    font-size: var(--fontBig);
    color: var(--white);
  }
`;
