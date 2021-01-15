// Задание
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши
//  в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив
//   values все значения его свойств.

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for (let key of keys) {
  values.push(apartment[key]);
}
console.log(keys);
console.log(values);
