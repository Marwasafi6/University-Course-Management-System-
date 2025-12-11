export default class Student {
  constructor(id, name, courses = []) {
    Object.defineProperty(this, 'id', {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });

    this.name = name;
    this.courses = Array.isArray(courses)
      ? courses.map(c => ({ courseId: c.courseId, grade: c.grade }))
      : [];
  }

  addCourse(courseId, grade) {
    if (typeof courseId !== 'number' || typeof grade !== 'number') {
      throw new TypeError('courseId and grade must be numbers');
    }
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    if (!this.courses || this.courses.length === 0) return 0;
    const sum = this.courses.reduce((acc, cur) => acc + cur.grade, 0);
    return sum / this.courses.length;
  }
}
