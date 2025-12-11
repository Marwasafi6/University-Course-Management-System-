export function calculateClassAverage(students, courseId) {
  const grades = [];

  for (const student of students) {
    if (!student || !Array.isArray(student.courses)) continue;
    const course = student.courses.find(c => c.courseId === courseId);
    if (course && typeof course.grade === 'number') {
      grades.push(course.grade);
    }
  }

  if (grades.length === 0) return 0;
  const sum = grades.reduce((a, b) => a + b, 0);
  return sum / grades.length;
}

export function findTopStudent(students) {
  if (!Array.isArray(students) || students.length === 0) return null;

  let topStudent = null;
  let topAverage = -1;

  for (const s of students) {
    const avg = s.getAverage();  

    if (avg > topAverage) {
      topAverage = avg;
      topStudent = s;
    }
  }

  return topStudent;
}


export function filterStudents(students, criteriaFn) {
  if (typeof criteriaFn !== 'function') {
    throw new TypeError('criteriaFn must be a function');
  }
  return students.filter(criteriaFn);
}
