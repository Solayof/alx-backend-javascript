export default function hasValuesFromArray(set, arrObj) {
  for (const val of arrObj) {
    if (!set.has(val)) {
      return false;
    }
  }
  return true;
}
