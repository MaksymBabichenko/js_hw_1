/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - И пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// "&&" - и
// "||" - или

// Меня зовут Максим и Мне 18 и Я трейдер

// тестовые данные (значения можно менять)
const isAdmin = false;
const isVerifiedUser = false;
const hasSpecialPermission = true;
const hasTemporaryPass = true;

let isAccess =
  (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);

// if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
//   isAccess = true;
// }

console.log(isAccess);
// your code
