// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// 1 + 1
// 2 + 2
// 4 + 3
// 7 + 4
// 11 + 5

// Текущая сумма + текущая итерация

// conditional - (maxIteration > currentIteration)

// your code
let sum = 0;

// Helper Variables
let maxIteration = 20;
let currentIteration = 1;

// while - зарезервировное слово для цыкла
// (...) - Условия при котором работает наш цыкл. Пока условие равно true цыкл крутится, в случае когда условие будет false цыкл закочится
// {} - блок кода который будет исполнятся при каждой итерация (круг, цикл, исполнение) цылка

while (maxIteration > currentIteration) {
  // Start code
  sum = sum + currentIteration;

  // End code
}

let count = 1; // source - источник - главарь
// count = 1

count = 2;
// count = 2

count = 3;
// count = 3

console.log(count); // 3

count = count + 1;
// count = 4

console.log(count); // 4
