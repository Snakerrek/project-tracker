import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  h2 {
    margin: 0;
    font-size: var(--fontHuge);
    color: var(--white);
    display: inline-block;
  }
`;

export const Button = styled.button`
  vertical-align: top;
  background-color: var(--lightGrey);
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  color: var(--darkGrey);
  font-size: var(--fontBig);
  padding: 8px;
  font-weight: bold;
  text-shadow: 0px 1px 0px #528009;
  margin-left: 10px;
`;
