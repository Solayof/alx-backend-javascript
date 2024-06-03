export default function getStudentsByLocation(obj, location) {
  return obj.filter((valObj) => valObj.location === location);
}
