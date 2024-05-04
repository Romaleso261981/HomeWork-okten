/*Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.

    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер". */

/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
const arr = [1, true, 7, 8, false, 9, "a", "b"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
const obj = {
    title: "Agata cristie",
    pageCount: 250,
    genre: "detective",
};

const obj2 = {
    title: "Harry Potter",
    pageCount: 350,
    genre: "fantasy",
};
const obj3 = {
    title: "Sherlock Holmes",
    pageCount: 300,
    genre: "detective",
};


/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
const obj4 = {
    title: "The Lord of the Rings",
    pageCount: 350,
    genre: "Detective",
    authors: [{name: "Agata Cristie", age: 65}, {name: "Arthur Conan Doyle", age: 75}, {name: "J.K. Rowling", age: 55}],
}
const obj5 = {
    title: "Agata cristie",
    pageCount: 350,
    genre: "Detective",
    authors: [{name: "Agata Cristie", age: 65}, {name: "Arthur Conan Doyle", age: 75}, {name: "J.K. Rowling", age: 55}],
}
const obj6 = {
    title: "Harry Potter",
    pageCount: 350,
    genre: "Fantasy",
    authors: [{name: "Agata Cristie", age: 65}, {name: "Arthur Conan Doyle", age: 75}, {name: "J.K. Rowling", age: 55}],
}

/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

// type User = {
//     name: string,
//     username: string,
//     password: string,
// }
// type Users = User[]

const users = [
    {
        id: 1,
        name: "Vasya",
        username: "SuperVasya",
        password: "Luchshiy",
    },
    {
        id: 2,
        name: "Kolya",
        username: "SuperVasya",
        password: "Luchshiy",
    },
    {
        id: 3,
        name: "Petya",
        username: "SuperVasya",
        password: "Luchshiy",
    },
    {
        id: 4,
        name: "Olya",
        username: "lldko258",
        password: "Luchshiy",
    },
    {
        id: 5,
        name: "petrov",
        username: "azlld3654",
        password: "Luchshiy",
    },
    {
        id: 6,
        name: "koss",
        username: "kfvj2545d",
        password: "Luchshiy",
    },
    {
        id: 7,
        name: "strre",
        username: "356dfmlfvp;",
        password: "Luchshiy",
    },
    {
        id: 8,
        name: "groom",
        username: "gjlf452",
        password: "qwe125",
    },
    {
        id: 9,
        name: "groot",
        username: "lkguurj2455",
        password: "L254sddf",
    },
    {
        id: 10,
        name: "groot2",
        username: "SuperVasya",
        password: "Luchshiy125"
    },

];

users.forEach(user => {
    console.log(user);
});

/*- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу*/

const temperature = [
    {id: 1, data: Date.now(), morning: 10, day: 20, evening: 15},
    {id: 2, data: Date.now(), morning: 12, day: 25, evening: 17},
    {id: 3, data: Date.now(), morning: 14, day: 30, evening: 20},
    {id: 4, data: Date.now(), morning: 15, day: 35, evening: 22},
    {id: 5, data: Date.now(), morning: 16, day: 40, evening: 24},
    {id: 6, data: Date.now(), morning: 18, day: 45, evening: 26},
    {id: 7, data: Date.now(), morning: 20, day: 50, evening: 28},
];

console.log(temperature);

/*Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = 1;
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = 30;
if (time >= 0 && time < 15) {
    console.log("перша чверть");
} else if (time >= 15 && time < 30) {
    console.log("друга чверть");
} else if (time >= 30 && time < 45) {
    console.log("третя чверть");
} else {
    console.log("четверта чверть");
}

/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

const day = 15; // Змініть це число, щоб перевірити різні дні

if (day <= 10) {
    console.log("Перша декада місяця");
} else if (day <= 20) {
    console.log("Друга декада місяця");
} else {
    console.log("Третя декада місяця");
}


let dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log("Понеділок - день англійської мови");
        break;
    case 2:
        console.log("Вівторок - день математики");
        break;
    case 3:
        console.log("Середа - день історії");
        break;
    case 4:
        console.log("Четвер - день фізики");
        break;
    case 5:
        console.log("П'ятниця - день хімії");
        break;
    case 6:
        console.log("Субота - вихідний");
        break;
    case 7:
        console.log("Неділя - вихідний");
        break;
    default:
        console.log("Невідомий день");
}

/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).*/

let x2 = null;

x2 = x2 ?? "default"

console.log("x2", x2);


/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach((course) => {
    if (course.monthDuration > 5) {
        console.log("Супер");
    }
})
