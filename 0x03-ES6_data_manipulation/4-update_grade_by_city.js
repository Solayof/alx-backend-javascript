export default function updateStudentGradeByCity(arrObjs, city, newGrades) {
  const cityObj = arrObjs.filter((objVal) => objVal.location === city);
  return cityObj.map((obj) => {
    const idx = newGrades.map((val) => val.studentId);
    const newObj = { ...obj };
    if (idx.includes(obj.id)) {
      for (const student of newGrades) {
        if (student.studentId === obj.id) {
          newObj.grade = student.grade;
          return newObj;
        }
      }
    }
    newObj.grade = 'N/A';
    return newObj;
  });
}
