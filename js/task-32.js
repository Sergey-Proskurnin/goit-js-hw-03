// Задание
// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так, чтобы
// она считала сумму только тех аргументов, которые больше чем
// заданное число. Это число должно быть первым параметром функции.

// Тесты
// Объявлена функция addOverNum().
// Вызов addOverNum(50, 15, 27) возвращает 0.
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71.
// Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51.
// Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218.

// Пиши код ниже этой строки
function addOverNum(firstArg, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstArg) {
      total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
