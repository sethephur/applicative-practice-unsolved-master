/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  }

  let minValue = cb(array[0]);
  let minElement = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    const currentValue = cb(currentElement);

    if (currentValue < minValue) {
      minValue = currentValue;
      minElement = currentElement;
    }
  }

  return minElement;
}

export function maxBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  }

  let maxValue = cb(array[0]);
  let maxElement = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    const currentValue = cb(currentElement);

    if (currentValue > maxValue) {
      maxValue = currentValue;
      maxElement = currentElement;
    }
  }

  return maxElement;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function