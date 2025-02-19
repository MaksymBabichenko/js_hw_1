/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// 10 = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3 628 800
// 5 = 5 * 4 * 3 * 2 * 1 = 120
// 5 = 1 * 2 * 3 * 4 * 5 = 120

// n = n * (n - 1) * (n - 2) * (n - 3) ...

// 10 = 10 * (10 - 1); Iteration 1
// 10 = 9 * (10 - 2); Iteration 2

// "==" "===" "!=="

// your code
let factorial = 10;

// let maxIteration = 10; // Максимальное количество итераций
// let currentIteration = 1; // Текущая итерация

let n = 10; // текущее число для того что бы узнать следующее число для факториала

while (n > 1) {
  console.log("BEFORE calculation", factorial);
  console.log(`calculation params: ${factorial} * (${n} - 1)`);
  factorial = factorial * (n - 1);
  console.log("AFTER calculation", factorial);
  console.log("n", n);
  n = n - 1;
}

// console.log(factorial);
