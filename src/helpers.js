export const convertNumberToTimeString = (timeInSeconds) => {
  const time = {
    hours: `000${Math.floor(timeInSeconds / 3600)}`.slice(-4),
    minutes: `0${Math.floor((timeInSeconds / 60) % 60)}`.slice(-2),
    seconds: `0${timeInSeconds % 60}`.slice(-2),
  };

  return `${time.hours}:${time.minutes}:${time.seconds}`;
};
