// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() возвращает ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],

  getPotions() {
    return this.potions;
  },
};
console.log(atTheOldToad.getPotions());
