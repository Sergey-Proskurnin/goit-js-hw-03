// Задание
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял
//  название книги с oldName на newName в свойстве books. Используй indexOf() для того,
//   чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// Тесты
// Объявлена переменная bookShelf.
// Значение переменной bookShelf это объект.
// Значение свойства bookShelf.updateBook это метод объекта.
// После вызова метода bookShelf.updateBook('Мгла', 'Хроники подземелий'), значение
//  свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].
// После вызова метода bookShelf.updateBook('Последнее королевство', 'Дюна'), значение
//  свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    const bookIndex = this.books.indexOf(oldName);
    // console.log(bookIndex);
    // console.log(newName);
    this.books.splice(bookIndex, 1, newName);
//  console.log(bookShelf.books);
    // Пиши код выше этой строки
  },
 
};

console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));
