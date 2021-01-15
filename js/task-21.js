// Задание
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю
// температуру за три дня (meanTemperature). Замени объявления переменных yesterday,
// today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// Тесты
// Объявлена переменная highTemperatures.
// Значение переменной highTemperatures это объект.
// Объявлена переменная yesterday с помощью деструктуризации.
// Значение переменной yesterday это число 28.
// Объявлена переменная today с помощью деструктуризации.
// Значение переменной today это число 26.
// Объявлена переменная tomorrow с помощью деструктуризации.
// Значение переменной tomorrow это число 33.
// Объявлена переменная meanTemperature.
// Значение переменной meanTemperature это число 29.
// Используется синтаксис деструктуризации объекта highTemperatures.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const { yesterday, today, tomorrow } = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);
