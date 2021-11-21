/**
 * Create array of number based on range starting and ending points
 * @param start Start point
 * @param end End point
 * @param step Jump numbers (By default it will be set to 1)
 * @returns Results array of number
 */
const makeArrayOfRange = (start: number, end: number, step: number = 1): number[] => {
  let output = [];

  for (let i = start; i <= end; i += step) {
    output.push(i);
  }

  return output;
}

export default makeArrayOfRange;