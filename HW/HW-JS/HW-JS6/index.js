/*
- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]

==========================
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 =========================
 описати колоду карт (від 6 до туза без джокерів)
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}

=========================

Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
=========================
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
*/

/*- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'
*/

let str1 = "hello world";
let str2 = "lorem ipsum";
let str3 = "javascript is cool";

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

/*- Перевести до великого регістру наступні стрінгові значення
        'hello world', 'lorem ipsum', 'javascript is cool'
*/

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

/*
- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
*/

let str4 = "HELLO WORLD";
let str5 = "LOREM IPSUM";
let str6 = "JAVASCRIPT IS COOL";

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

/* - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/

let str = " dirty string   ";
console.log(str.trim());

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
*/

function stringToarray(str) {
  return str.split(" ");
}

let str7 = "Ревуть воли як ясла повні";
console.log(stringToarray(str7));

/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
*/

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrStr = arr.map((value) => value.toString());

console.log(arrStr);

/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/

function sortNums(arr, direction) {
  // switch (direction) {
  //   case "asc":
  //     return arr.sort((a, b) => a - b);
  //   case "desc":
  //     return arr.sort((a, b) => b - a);
  //   default:
  //     return arr.sort((a, b) => (direction === "asc" ? a - b : b - a));
  // }

  // if (direction === "asc") {
  //   return arr.sort((a, b) => a - b);
  // } else if (direction === "desc") {
  //   return arr.sort((a, b) => a - b);
  // }

  return arr.sort((a, b) => (direction === "ascending" ? a - b : b - a));
}

console.log(sortNums([11, 21, 3], "asc"));
console.log(sortNums([11, 21, 3], "desc"));

/*==================================================================================
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 */

let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 }
];

console.log(
  coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
);
console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));
console.log(
  coursesAndDurationArray.map((item) => {
    return {
      id: coursesAndDurationArray.indexOf(item),
      title: item.title,
      monthDuration: item.monthDuration
    };
  })
);

/* описати колоду карт (від 6 до туза без джокерів)*/
let cards = [];
let cardSuit = ["spade", "diamond", "heart", "clubs"];
let values = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

cards = cardSuit.reduce((acc, cardSuit) => {
  values.forEach((value) => {
    acc.push({
      cardSuit,
      value
    });
  });
  return acc;
}, []);

console.log("Колода карт", cards);

/*- знайти піковий туз*/
console.log(
  "піковий туз",
  cards.find((card) => card.cardSuit === "spade" && card.value === "ace")
);

/*- всі шістки*/
console.log(
  "всі шістки",
  cards.filter((card) => card.value === "6")
);

/*- всі червоні карти*/
console.log(
  "всі червоні карти",
  cards.filter(
    (card) => card.cardSuit === "diamond" || card.cardSuit === "heart"
  )
);

/*- всі буби*/
console.log(
  "всі буби",
  cards.filter((card) => card.cardSuit === "diamond")
);

/*- всі трефи від 9 та більше*/
console.log(
  "всі трефи від 9 та більше",
  cards.filter(
    (card) => card.cardSuit === "clubs" && values.indexOf(card.value) >= 3
  )
);

/*
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
*/

const cardsObj = cards.reduce(
  (acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
  },
  { spade: [], diamond: [], heart: [], clubs: [] }
);

console.log("Колода карт", cardsObj);

/*
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
*/

const coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js"
    ]
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced"
    ]
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced"
    ]
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"]
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java"
    ]
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass"
    ]
  }
];

/*
--написати пошук всіх об'єктів, в який в modules є sass
*/

console.log(
  "об'єкти, в який в modules є sass",
  coursesArray.filter((course) => course.modules.includes("sass"))
);

/*
--написати пошук всіх об'єктів, в який в modules є docker
*/

console.log(
  "об'єкти, в який в modules є docker",
  coursesArray.filter((course) => course.modules.includes("docker"))
);

/*Це кінець домашньої роботи я просто хочу попрактикувати yield*/

let img = [
  "https://t4.ftcdn.net/jpg/03/30/15/99/360_F_330159902_hUzQk7cFjhqedVQpdzAGuWFaRzKpW0W4.jpg",
  "https://w7.pngwing.com/pngs/206/448/png-transparent-area-triangle-pattern-card-diamond-s-angle-triangle-symmetry.png",
  "https://i.pinimg.com/474x/3e/fa/cb/3efacb12feada391eee1d0d3c646a062.jpg",
  "https://www.shutterstock.com/image-vector/clubs-icon-illustration-isolated-vector-260nw-1908252865.jpg"
];
let values2 = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

const cards2 = img.reduce((acc, img) => {
  values2.forEach((value) => {
    acc.push({
      img,
      value
    });
  });
  return acc;
}, []);

console.log("Колода карт2", cards2);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Перемішуємо колоду карт
shuffle(cards2);

function* cardsHolder() {
  for (const card of cards2) {
    yield card;
  }
}

const cardsHolderGenerator = cardsHolder();
const player1 = [];
const player2 = [];
const player3 = [];
const player4 = [];
const ul = document.createElement("ul");
ul.classList.add("player1");
const ul2 = document.createElement("ul");
ul2.classList.add("player2");
const ul3 = document.createElement("ul");
ul3.classList.add("player3");
const ul4 = document.createElement("ul");
ul4.classList.add("player4");

for (let i = 0; i < 6; i++) {
  const li = document.createElement("li");
  li.classList.add("cardBlock");
  const p = document.createElement("p");
  const img = document.createElement("img");
  img.classList.add("img");
  player1.push(cardsHolderGenerator.next());
  p.innerText = player1[i].value.value;
  img.src = player1[i].value.img;
  li.appendChild(p);
  li.appendChild(img);
  ul.appendChild(li);
  const li2 = document.createElement("li");
  li2.classList.add("cardBlock");
  const p2 = document.createElement("p");
  const img2 = document.createElement("img");
  img2.classList.add("img");
  player2.push(cardsHolderGenerator.next());
  p2.innerText = player2[i].value.value;
  img2.src = player2[i].value.img;
  li2.appendChild(p2);
  li2.appendChild(img2);
  ul2.appendChild(li2);
  const li3 = document.createElement("li");
  li3.classList.add("cardBlock");
  const p3 = document.createElement("p");
  const img3 = document.createElement("img");
  img3.classList.add("img");
  player3.push(cardsHolderGenerator.next());
  p3.innerText = player3[i].value.value;
  img3.src = player3[i].value.img;
  li3.appendChild(p3);
  li3.appendChild(img3);
  ul3.appendChild(li3);
  const li4 = document.createElement("li");
  li4.classList.add("cardBlock");
  const p4 = document.createElement("p");
  const img4 = document.createElement("img");
  img4.classList.add("img");
  player4.push(cardsHolderGenerator.next());
  p4.innerText = player4[i].value.value;
  img4.src = player4[i].value.img;
  li4.appendChild(p4);
  li4.appendChild(img4);
  ul4.appendChild(li4);
  document.body.appendChild(ul);
  document.body.appendChild(ul2);
  document.body.appendChild(ul3);
  document.body.appendChild(ul4);
}
