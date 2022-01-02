export const convertNumberToTimeString = (timeInSeconds) => {
  if (timeInSeconds === 0) return "0000:00:00";

  const time = {
    hours: Math.floor(timeInSeconds / 60 / 60),
    minutes: Math.floor((timeInSeconds / 60) % 60),
    seconds: Math.floor(timeInSeconds % 60),
    timeString: "",
  };

  // Converting to HHHH:MM:SS format (0000:00:00)
  if (time.hours > 1000) time.timeString += `${time.hours}:`;
  else if (time.hours > 100) time.timeString += `0${time.hours}:`;
  else if (time.hours > 10) time.timeString += `00${time.hours}:`;
  else if (time.hours > 0) time.timeString += `000${time.hours}:`;
  else time.timeString += `0000:`;

  if (time.minutes > 10) time.timeString += `${time.minutes}:`;
  else if (time.minutes > 0) time.timeString += `0${time.minutes}:`;
  else time.timeString += `00:`;

  if (time.seconds > 10) time.timeString += `${time.seconds}`;
  else if (time.seconds > 0) time.timeString += `0${time.seconds}`;
  else time.timeString += `00`;

  return time.timeString;
};
