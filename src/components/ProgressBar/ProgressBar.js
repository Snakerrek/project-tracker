import { Wrapper } from "./ProgressBar.styles";

const ProgressBar = ({ value, max }) => {
  let percentValue = max !== 0 ? (value / max) * 100 : 0;
  percentValue = Math.min(Math.ceil(percentValue), 100);

  return (
    <Wrapper>
      <progress value={value} max={max} />
      <span>{percentValue}%</span>
    </Wrapper>
  );
};

export default ProgressBar;
