// Задание
// Напиши функцию getAllPropValues(propName) которая принимает
//  один параметр propName - имя (ключ) свойства. Функция должна
//   вернуть массив всех значений свойства с таким именем из каждого
//    объекта в массиве products. Если в объектах нет свойства с таким
//     именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName).
// Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
// Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
// Вызов getAllPropValues('category') возвращает [].

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    // Пиши код ниже этой строки
    const prices = [];
        for (let product of products) {
            // console.log(Object.keys(product));

            if (Object.keys(product).includes(propName)) {// let key = propName;
            prices.push(product[propName]);
            }
        // if (product === propName) {

        //     prices.push(product.price);
            // return Object.values(products.price)
        } 
        return prices
      }
   
    
    // Пиши код выше этой строки
  
  console.log(getAllPropValues('category'));