// Задание
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.
// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Значение вложенного свойства area это число 60.
// Значение вложенного свойства rooms это число 3.
// Значение вложенного свойства location это объект.
// Значение вложенного свойства location.country это строка 'Ямайка'.
// Значение вложенного свойства location.city это строка 'Кингстон'.

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
      name: 'Генри Сибола',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };

  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {};
  apartment.location.country = 'Ямайка';
  apartment.location.city = 'Кингстон';

  console.table(apartment);