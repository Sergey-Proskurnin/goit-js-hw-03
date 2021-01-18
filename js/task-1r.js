// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.log(user);

function keyVelue () {
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

// console.log(user);
const velues = Object.keys(user);
 for (let velue of velues){
   console.log(`${velue}:${user[velue]}`);
   
 }
 return 
}
keyVelue ()
// console.log(Object.keys(user)); 
