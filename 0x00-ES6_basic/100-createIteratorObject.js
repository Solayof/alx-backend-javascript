export default function createIteratorObject(report) {
  const itterator = [];
  // console.log(Object.values(report.allEmployees));
  Object.values(report.allEmployees).map((value) => itterator.push(...value));
  return itterator;
}
