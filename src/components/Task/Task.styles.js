import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
  text-align: left;
  padding: 16px;
  border-radius: 5px;
  width: 90%;
`;

export const Buttons = styled.div`
  margin: 0 10px;
  display: flex;
  flex-wrap: nowrap;
`;

export const Button = styled.button`
  background: ${(props) =>
    props.complete
      ? "linear-gradient(to bottom, #89c403 5%, #77a809 100%))"
      : "linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);"};
  background-color: #89c403;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528009;
  margin-left: 4px;

  :active {
    position: relative;
    top: 1px;
  }
`;
