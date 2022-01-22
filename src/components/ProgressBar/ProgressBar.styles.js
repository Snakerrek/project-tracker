import styled from "styled-components";

export const Wrapper = styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: 250px;
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }
  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: #3efb00;
    transition: width 0.5s;
  }

  span {
    color: var(--white);
  }
`;
