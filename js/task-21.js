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



// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(icon);

// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = 'https://via.placeholder.com/640/480',
//   author,
// } = book;

// console.log(title); // Последнее королевство
// console.log(author); // Бернард Корнуэлл
// console.log(coverImage); // https://via.placeholder.com/640/480