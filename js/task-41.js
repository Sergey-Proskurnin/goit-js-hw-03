// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем,
//  но и ценой, а в будущем может быть и другими характеристиками. Поэтому
//   теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

//   {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали
//  не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект)
// в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName
// из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием
//  oldName на newName в массиве potions.
// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает
//  [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 },
//   { name: 'Каменная кожа', price: 520 } ].
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }),
//  в массиве potions последним элементом будет этот объект.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }),
//  в массиве potions последним элементом будет этот объект.
// Значение свойства atTheOldToad.removePotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве
//  potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве
//  potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в
//  свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 },
//   { name: 'Каменная кожа', price: 520 } ].
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'),
//  в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 },
//   { name: 'Зелье неуязвимости', price: 520 } ].

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions(...arg) {
    return this.potions;
  },

  addPotion(potionName) {
    this.potions.push(potionName);
    return this.potions;
  },
  removePotion(potionName) {
    let potionIndex;
    for (let i = 0; i < this.potions.length; i++) {
    //   console.log(this.potions[i]);
      for (const key in this.potions[i]) {
        // console.log(this.potions[i][key]);
        if (this.potions[i][key] === potionName) {
          potionIndex = i;
        //   console.log(i);
          this.potions.splice(potionIndex, 1);
        }
      }
    }
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    let potionIndex;
    for (let i = 0; i < this.potions.length; i++) {
    //   console.log(this.potions[i]);
      for (let key in this.potions[i]) {
        // console.log(this.potions[i][key]);
        // console.log(key);
if (this.potions[i][key] === oldName) {
    this.potions[i][key] = newName
    // console.log(key);
}
      }
    }
    return this.potions;
  },
};

// Пиши код выше этой строки

//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
//   console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
//   console.log(atTheOldToad.removePotion('Дыхание дракона'));
//   console.log(atTheOldToad.removePotion('Зелье скорости'));
//   console.log(atTheOldToad.removePotion(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));

// (3) [{…}, {…}, {…}]
// 0: {name: "Зелье скорости", price: 460}
// 1: {name: "Дыхание дракона", price: 780}
// 2: {name: "Каменная кожа", price: 520}

// (4) [{…}, {…}, {…}, {…}]
// 0: {name: "Зелье скорости", price: 460}
// 1: {name: "Дыхание дракона", price: 780}
// 2: {name: "Каменная кожа", price: 520}
// 3: {name: "Невидимка", price: 620}

// (4) [{…}, {…}, {…}, {…}]
// 0: {name: "Зелье скорости", price: 460}
// 1: {name: "Дыхание дракона", price: 780}
// 2: {name: "Каменная кожа", price: 520}
// 3: {name: "Зелье силы", price: 270}

// (2) [{…}, {…}]
// 0: {name: "Зелье скорости", price: 460}
// 1: {name: "Каменная кожа", price: 520}

// (2) [{…}, {…}]
// 0: {name: "Дыхание дракона", price: 780}
// 1: {name: "Каменная кожа", price: 520}

// 0: {name: "Зелье скорости", price: 460}
// 1: {name: "Полиморф", price: 780}
// 2: {name: "Каменная кожа", price: 520}

// (3) [{…}, {…}, {…}]
// 0: {name: "Зелье скорости", price: 460}
// 1: {name: "Дыхание дракона", price: 780}
// 2: {name: "Зелье неуязвимости", price: 520}