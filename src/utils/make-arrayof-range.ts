const makeArrayOfRange = (start: number, end: number, step: number = 1): number[] => {
  let output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i <= end; i += step) {
    output.push(i);
  }

  return output;
}

export default makeArrayOfRange;