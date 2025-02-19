/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// currentIteration >= maxIteration - true or false

// your code
let sum = 0;
//  если (условие правда)  {
//    выполни код который внутри
//  }

// -  |  |
// 1  2  3  4  5

const maxIteration = 20;
let currentIteration = 1;

while (maxIteration > currentIteration) {
  // сумма равна максимальной итеррации + текущей итеррации

  // На кого мы ориентируемся что бы узнать четное это число у нас или нет, кого нам надо использовать что бы узнать это
  if (currentIteration % 2 === 1) {
    sum = sum + currentIteration;
    console.log(`${sum} = ${sum} + ${currentIteration}`);
    console.log(currentIteration);
    console.log(sum);
  }

  currentIteration = currentIteration + 1;
}
