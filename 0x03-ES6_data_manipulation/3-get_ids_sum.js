export default function getStudentIdsSum(obj) {
  return obj.reduce((acc, objVal) => acc + objVal.id, 0);
}
