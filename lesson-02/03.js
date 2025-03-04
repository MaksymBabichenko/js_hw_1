/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// если оценка больше 70 или меньше 79 грейд равен C

const score = 70; // тестовое значение, можно изменять
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "С";
} else if (score >= 50 && score <= 69) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log(grade);

// const GRADE_MAP = [
//   {
//     max: 1000,
//     min: 50,
//     grade: "AAA++",
//   },
//   {
//     max: 100,
//     min: 90,
//     grade: "A",
//   },
//   {
//     max: 89,
//     min: 80,
//     grade: "B",
//   },
//   {
//     max: 79,
//     min: 70,
//     grade: "C",
//   },
//   {
//     max: 69,
//     min: 50,
//     grade: "D",
//   },
//   {
//     max: 49,
//     min: 0,
//     grade: "F",
//   },
// ];

// function takeGrade(scoreUser, gradeMap) {
//   return gradeMap.find((v) => {
//     return scoreUser >= v.max && scoreUser <= v.min;
//   }).grade;
// }

// console.log(takeGrade(70, GRADE_MAP));
// console.log(takeGrade(0, GRADE_MAP));
// console.log(takeGrade(100, GRADE_MAP));
// console.log(takeGrade(44, GRADE_MAP));
// console.log(takeGrade(56, GRADE_MAP));
// console.log(takeGrade(501, GRADE_MAP));
