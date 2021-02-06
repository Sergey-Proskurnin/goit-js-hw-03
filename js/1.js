// // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// const min = function (a, b) {
//    return a > b ? b : a

//     }
//     console.log(min(2, 3));

// Task 7
// Напиши функцию, которая будет принимать 2 параметра, первый это объект user2 который будем перебирать
// и второй это строка - имя ключа, который лежит в последнем по вложенности объекте
// Результат вызова функции - это значение ключа, который мы передаем вторым параметром в функцию
// Перебираем сначала конкретный объект, когда напишите функцию для объекта user2, можно будет ее оптимизировать
// под разные объекты

const user2 = {
  name: 'Hacker',

  userTechnologies: {
    frameworks: {
      react: 'this is library',
      vue: 'i like this frame',
      angular: 'maybe sometime',

      libraries: {
        axios: 5,
        lodash: 4,
        pnotify: 3,
      },
    },
  },
};
const getNestedName = function (user, keyName) {
  for (let key in user) {
    if (typeof user[key] === 'object') {
      for (let key1 in user[key]) {
        if (typeof user[key][key1] === 'object') {
          //  console.log(user[key][key1]);

          for (let key2 in user[key][key1]) {
            if (typeof user[key][key1][key2] === 'object') {
              return user[key][key1][key2][keyName];
            }
          }
        }
      }
    }
  }
};

console.log(getNestedName(user2, 'axios')); // 5
// console.log(getNestedName(user2, 'lodash'))  // 4
// console.log(getNestedName(user2, 'pnotify')) // 3
