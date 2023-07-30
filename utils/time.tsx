export const getTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const strs = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${strs}`;
}

export const getSeconds = (seconds: number) => {
  return seconds < 10 ? `0${seconds}` : seconds;
}