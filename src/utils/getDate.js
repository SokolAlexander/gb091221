export const getDate = (data) => {
  if (data.length > 1) {
    return `${data[0]} - ${data[data.length - 1]}`;
  }

  if (data[0]) {
    return `${data[0]} - till now`;
  }

  return "unknown";
};
