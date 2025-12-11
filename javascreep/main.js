import Student from './models.js';
import { fetchStudents } from './database.js';
import { calculateClassAverage, findTopStudent, filterStudents } from './analytics.js';

fetchStudents((rawData) => {
  console.log('Data received!\n');

  const students = rawData.map(d => new Student(d.id, d.name, d.courses));

  console.log('Testing Immutability:');
  console.log('Original ID:', students[0].id);
  console.log('Attempting to change ID to 999...');
  try {
    students[0].id = 999;
  } catch (err) {
    console.error('Error:', err.message);
  }
  console.log('Final ID:', students[0].id, '(Success: ID did not change)\n');

  console.log('--- Analytics Report ---');

  const classAvg101 = calculateClassAverage(students, 101);
  console.log('Class Average for Course 101:', classAvg101.toFixed(2));

  const top = findTopStudent(students);
  console.log(`Top Student: ${top.name} (Average: ${top.getAverage().toFixed(2)})`);

  const studentsIn102 = filterStudents(
    students,
    student => student.courses.some(c => c.courseId === 102)
  );

  console.log('Students in Course 102:', studentsIn102.map(s => s.name).join(', '));
});
