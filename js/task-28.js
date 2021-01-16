// Задание
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования
//  отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
// Тесты
// Объявлена переменная firstGroupScores.
// Значение переменной firstGroupScores это массив [64, 42, 93].
// Объявлена переменная secondGroupScores.
// Значение переменной secondGroupScores это массив [89, 14, 51, 26].
// Объявлена переменная thirdGroupScores.
// Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81].
// Объявлена переменная allScores.
// Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81].
// Объявлена переменная bestScore.
// Значение переменной bestScore это число 97.
// Объявлена переменная worstScore.
// Значение переменной worstScore это число 14.
// При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива.
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores.
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(allScores);
console.log(bestScore);
console.log(worstScore);



