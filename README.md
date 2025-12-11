# University-Course-Management-System-


This project implements a simple University Course Management System using JavaScript. The goal of the assignment is to practice asynchronous callbacks, ES6 classes, object property descriptors, and array manipulation while keeping the code separated into different files.


File Organization

**1. `models.js`**

Contains the `Student` class.

* Defines an immutable `id` using `Object.defineProperty()`
* Stores student name and course list
* Provides:

  * `addCourse(courseId, grade)`
  * `getAverage()`


**2. `database.js`**

Simulates fetching student data from a database.

* Uses `setTimeout()` to create a **2-second delay**
* Returns hard-coded student data through a callback


**3. `analytics.js`**

Includes all analytical functions:

* `calculateClassAverage(students, courseId)`
* `findTopStudent(students)`
* `filterStudents(students, criteriaFn)`

This file performs all data calculations using array methods such as `.map()`, `.reduce()`, `.filter()`, and `.find()`.



**4. `main.js`**

The main file that runs everything.

Calls `fetchStudents()`
Converts raw data into `Student` objects
 Tests immutability of the ID
 Prints analytics results:

   Class average
   Top student
    Students enrolled in a specific course



🧪 How to Run the Project

Make sure you have Node.js installed.

Run the program with:

```
node main.js
```

After 2 seconds, all analytics results will appear in the console.


🧩 Challenges I Faced

 1. Making the Student ID Immutable**

Learning how to use `Object.defineProperty()` correctly took some time.
I had to adjust `writable` and `configurable` settings to ensure the ID could not be changed.

2. Converting Raw Data into Class Objects**

I needed to carefully map the raw array into real `Student` instances without losing course data.

3. Debugging Analytics Functions**

Functions like `findTopStudent()` and `calculateClassAverage()` required attention because small mistakes in array manipulation caused incorrect results.


Just tell me!
