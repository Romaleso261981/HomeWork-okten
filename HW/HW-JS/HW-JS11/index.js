/*
- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

- зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
 =======================================================================================================================
 */

/*
 Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
 */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((value) => {
    console.log(value.body);
    return value.json();
  })
  .then((value) => {
    let users = value;
    for (const user of users) {
      let div = document.createElement("div");
      div.innerText = JSON.stringify(user);
      document.body.appendChild(div);
    }
  });

let form = document.createElement("form");
let name = document.createElement("input");
let surname = document.createElement("input");
let age = document.createElement("input");
let button = document.createElement("button");
let div = document.createElement("div");

name.name = "name";
surname.name = "surname";
age.name = "age";
button.innerText = "Send";

form.appendChild(name);
form.appendChild(surname);
form.appendChild(age);
form.appendChild(button);
document.body.appendChild(form);
document.body.appendChild(div);

button.onclick = () => {
  let obj = {
    name: name.value,
    surname: surname.value,
    age: age.value
  };
  div.innerText = JSON.stringify(obj);
};
