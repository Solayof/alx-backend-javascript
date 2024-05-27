export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  // for (let [idx, value] of array.entries()) {
  //   array[idx] = appendString + value;
  // }

  return newArray;
}
