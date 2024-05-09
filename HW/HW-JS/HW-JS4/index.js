/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
- створити функцію яка обчислює та повертає площу кола з радіусом r
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
- створити функцію яка приймає масив та виводить кожен його елемент
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
- створити функцію яка повертає найменьше число з масиву
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/

/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

function rectangleArea(a, b) {
    return a * b;
}

console.log(rectangleArea(5, 10));

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/

function circleArea(r) {
    return 3.14 * r ** 2;
}

console.log(circleArea(5));

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

function cylinderArea(r, h) {
    return 2 * 3.14 * r * (r + h);
}

console.log(cylinderArea(5, 10));

/*- створити функцію яка приймає масив та виводить кожен його елемент*/

function showArray(arr) {
    arr.forEach(item => console.log(item));
}

showArray([1, 2, 3]);

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

function createParagraph(text) {
    const p = document.createElement('p');
    p.innerText = text;
    document.body.appendChild(p);
}

createParagraph('text');

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

function createUlWithLi(text) {
    const ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.innerText = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

createUlWithLi('text');

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

function createUlWithLiCount(text, count) {
    const ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.innerText = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

createUlWithLiCount('text', 5);

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/

function createList(arr) {
    const ul = document.createElement('ul');
    arr.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

createList([1, 'text', true]);

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

function createBlocks(arr) {
    arr.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `id: ${item.id}, name: ${item.name}, age: ${item.age}`;
        document.body.appendChild(div);
    });
}

createBlocks([
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 30},
    {id: 3, name: 'Jack', age: 35}
]);

/*- створити функцію яка повертає найменьше число з масиву*/

function minNumber(arr) {
    let minNumber = 0
    for (let i = 0; i < arr.length; i++) {
        minNumber = arr[0];
        if (arr[i] < minNumber) {
            // console.log(arr[i])
            minNumber = arr[i];
        }
    }
    return minNumber;
    // return Math.min(...arr);
}

console.log(minNumber([-10, 2, 3]));

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/

function sum(arr) {
    return arr.reduce((acc, item) => acc + item, 0);
}

console.log(sum([1, 2, 10]));

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    switch (currencyValues.find(item => item.currency === exchangeCurrency).currency) {
        case 'USD':
            return sumUAH / currencyValues.find(item => item.currency === exchangeCurrency).value;
        case 'EUR':
            return sumUAH / currencyValues.find(item => item.currency === exchangeCurrency).value;
        default:
            return 'Currency not found';
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));