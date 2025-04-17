/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === " ") {
      result = result + char;
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result = result + char.toUpperCase();
      capitalizeNext = false;
    } else {
      result = result + char;
    }
  }
  return result;
}

console.log(capitalizeWords("go to home"));
