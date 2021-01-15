// Задание
// Запиши в переменную keys массив ключей собственных свойств объекта
// apartment, а в переменную values массив всех значений его свойств. Используй
// методы Object.keys() и Object.values().

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153].

const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  // Пиши код ниже этой строки
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);

  console.log(keys);
  console.log(values);
  