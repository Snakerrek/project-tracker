export const convertNumberToTimeString = (seconds) => {
  if (seconds === 0) return "0000:00:00";
  const hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  let timeString = "";

  if (hours === 0) timeString += `0000:`;
  else if (hours > 1000) timeString += `${hours}:`;
  else if (hours > 100) timeString += `0${hours}:`;
  else if (hours > 10) timeString += `00${hours}:`;
  else timeString += `000${hours}:`;

  if (minutes === 0) timeString += `00:`;
  else if (minutes < 10) timeString += `0${minutes}:`;
  else timeString += `${minutes}:`;

  if (seconds === 0) timeString += `00`;
  else if (seconds < 10) timeString += `0${seconds}`;
  else timeString += `${seconds}`;

  return timeString;
};
