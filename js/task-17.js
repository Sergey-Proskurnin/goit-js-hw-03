// Задание
// Перебери массив объектов colors используя цикл for...of. Добавь
// в массив hexColors значения свойств hex, а в массив rgbColors значения
// свойств rgb из всех объектов массива colors.

// Тесты
// Объявлена переменная colors.
// Значение переменной colors это массив.
// Объявлена переменная hexColors.
// Значение переменной hexColors это массив ['#f44336', '#2196f3', '#4caf50', '#ffeb3b'].
// Объявлена переменная rgbColors.
// Значение переменной rgbColors это массив ['244,67,54', '33,150,243', '76,175,80', '255,235,59'].

const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Пиши код ниже этой строки
  for (let color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
  }
  
  console.log(hexColors);
  console.log(rgbColors);