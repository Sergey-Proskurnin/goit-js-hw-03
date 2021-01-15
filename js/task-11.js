// Задание
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// Тесты
// Объявлена переменная advert.
// Значение переменной advert это объект.
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153].

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
if (apartment.hasOwnProperty(key)) {
    keys.push(key);
  values.push(apartment[key]);
}
  

  // Пиши код выше этой строки
}
console.log(keys);
console.log(values);
