// ex 1.1


// let array = [3, 12, 6];
// array[1] = 20;

// console.log(array)


// ex 1.2


// const strings = ["Рядок 1", "Рядок 2", "Рядок 3"];

// const newString = "Новий рядок";
// strings.push(newString);

// console.log("Масив рядків:", strings);


// ex 1.3


// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'number') {
//         sum += arr[i];
//       }
//     }
//     return sum;
//   }
  
//   const numbers = [2, 4, 6, 8, 10];
//   const totalSum = sumArray(numbers);
//   console.log("Сума чисел у масиві:", totalSum);


// ex 1.4


// const numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//   console.log("Елемент масиву:", numbers[i]);
// }


// ex 1.5


// const strings = ["Рядок 1", "Рядок 22", "Рядок 333", "Рядок 4444", "Рядок 55555"];

// for (let i = 0; i < strings.length; i++) {
//   if (strings[i].length > 5) {
//     console.log("Рядок з більше ніж 5 символами:", strings[i]);
//   }
// }


// ex 1.6


// const numbers = [15, 7, 23, 10, 42, 8, 56, 30, 18, 5];

// let maxNumber = numbers[0]; 

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i]; 
//   }
// }

// console.log("Максимальне значення у масиві:", maxNumber);


// ex 1.7


// const numbers = [15, 7, 23, 10, 42, 8, 56, 30, 18, 5];

// console.log("Парні числа у масиві:");

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }


// ex 2.1


// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//       console.log(`${i + 1} - ${array[i]}`);
//     }
//   }
  
//   const items = ['Mango', 'Poly', 'Ajax'];
//   logItems(items);


// ex 2.2


// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');
  
//     const wordCount = words.length;
//     const totalPrice = wordCount * pricePerWord;
  
//     return totalPrice;
//   }
  
//   const message = "Hello, this is an example message";
//   const pricePerWord = 10; 
//   const engravingPrice = calculateEngravingPrice(message, pricePerWord);
  
//   console.log(`Total engraving price: $${engravingPrice}`);


// ex 2.3


// function findLongestWord(string) {
//     const words = string.split(' ');
//     let longestWord = '';

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// function formatString(string) {
//     if (string.length <= 40) {
//         return string;
//     } else {
//         return string.slice(0, 40) + '...';
//     }
// }

// const inputString = "Це - прикладний текст для перевірки роботи функцій.";
// const longestWord = findLongestWord(inputString);
// const formattedString = formatString(inputString);

// console.log("Найдовше слово:", longestWord);
// console.log("Форматований рядок:", formattedString);


// ex 2.4


// function formatString(string) {
//     if (string.length <= 40) {
//         return string;
//     } else {
//         return string.slice(0, 40) + '...';
//     }
// }

// const inputString = "Це - прикладний текст для перевірки роботи функції форматування рядка.";
// const formattedString = formatString(inputString);

// console.log("Форматований рядок:", formattedString);


// ex 2.5


// function formatString(string) {
//     if (string.length <= 40) {
//         return string;
//     } else {
//         return string.slice(0, 40) + '...';
//     }
// }

// const inputString = "Це - прикладний текст для перевірки роботи функції formatString. Він дуже довгий.";
// const formattedString = formatString(inputString);

// console.log("Форматований рядок:", formattedString);


// ex 2.6


// const numbers = [];
// let total = 0;

// while (true) {
//     const input = prompt('Введіть число:');
    
//     if (input === null) {
//         break;
//     }
    
//     const number = parseFloat(input);
    
//     if (!isNaN(number)) {
//         numbers.push(number);
//     } else {
//         alert('Було введено не число, попробуйте ще раз.');
//     }
// }

// for (const number of numbers) {
//     total += number;
// }

// console.log(`Загальна сума чисел дорівнює ${total}`);


// ex 2.7