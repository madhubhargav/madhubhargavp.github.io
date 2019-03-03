export default (descriptions) => {
  return descriptions.sort((a, b) => {
    if (a.priority < b.priority) {
      return -1;
    } else if (a.priority > b.priority) {
      return 1;
    } else {
      return 0;
    }
  });
};
