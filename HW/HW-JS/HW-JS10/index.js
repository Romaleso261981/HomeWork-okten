/*
Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
==========================
є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
==========================
Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
=========================
зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів




- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)

*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
 =======================================================================================================================
 */

/*
 Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
 */

const form = document.getElementById("userForm1");
const btn = document.getElementById("btn");

btn.onclick = () => {
  const name = form.name.value;
  const surname = form.surname.value;
  const age = form.age.value;

  const user = {
    name,
    surname,
    age
  };

  const result = document.getElementById("result");
  result.innerHTML = `<pre>${JSON.stringify(user, null, 2)}</pre>`;
};

/*
є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
*/

const number = document.getElementById("num");
let c = localStorage.getItem("count") || 1;
number.textContent = c;

window.onload = () => {
  c++;
  localStorage.setItem("count", c);
  number.textContent = c;
};

/*
Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
*/

const button3 = document.getElementById("button3");

button3.onclick = () => {
  const sessions = JSON.parse(localStorage.getItem("sessions")) || [];
  sessions.push(new Date());
  localStorage.setItem("sessions", JSON.stringify(sessions));

  window.location.href = "nextPage.html";
};

/*
зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів
*/

let count = 5;
const step = 5;
const users = Array(100)
  .fill("")
  .map((_, i) => ({ id: i + 1, name: `user ${i + 1}` }));

const container = document.getElementById("container4");
const buttonWrapper = document.getElementById("buttonWrapper");
buttonWrapper.style.display = "flex";
buttonWrapper.style.justifyContent = "center";
buttonWrapper.style.margin = "10px";

const prev = document.getElementById("prev");
prev.style.display = "none";
prev.style.width = "100px";
prev.style.height = "50px";
prev.style.marginRight = "10px";

const next = document.getElementById("next");
next.style.display = count === users.length ? "none" : "block ";
next.style.width = "100px";
next.style.height = "50px";

function getNewUsers(count) {
  return users.slice(0, count);
}

const renderUsers = (newUsers = []) => {
  container.innerHTML = "";
  newUsers.forEach((user) => {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = "80vw";
    div.style.height = "100px";
    div.style.margin = "5px";
    div.style.padding = "5px";
    div.style.boxShadow = "0 0 5px 0 black";
    const span = document.createElement("span");
    span.style.marginRight = "10px";
    span.textContent = user.id;
    div.appendChild(span);
    const strong = document.createElement("strong");
    strong.style.marginRight = "10px";
    strong.textContent = user.name;
    div.appendChild(strong);
    container.appendChild(div);
  });
};

renderUsers(getNewUsers(count));

prev.onclick = () => {
  if (count === 5) {
    alert("No more users");
    prev.style.display = "none";
  }
  if (count !== 5) {
    count -= step;
  }
  renderUsers(getNewUsers(count));
};

next.onclick = () => {
  if (count === users.length) {
    alert("No more users");
  }
  if (count !== users.length) {
    count += step;
  }
  renderUsers(getNewUsers(count));
  prev.style.display = "block";
};

/*
- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
*/

const div5 = document.getElementsByClassName("root")[0];
const button5 = document.createElement("button");

button5.textContent = "Hide";
div5.appendChild(button5);

const p = document.getElementById("text");

button5.onclick = () => {
  p.style.display = "none";
};

/*
- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
*/

const input = document.getElementById("age");
const button6 = document.getElementById("button10/6");

button6.onclick = () => {
  const age = input.value;
  if (age < 18) {
    alert("You are under 18");
  } else {
    alert("You are over 18");
  }

  input.value = "";
};

/*
*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)
*/

const rows = document.getElementById("rows");
rows.style.marginLeft = "20px";
const cols = document.getElementById("cols");
cols.style.marginLeft = "20px";
const content = document.getElementById("content");
const button = document.getElementById("button");

const table = document.getElementById("table");

button.onclick = () => {
  const rowsValue = rows.value;
  const colsValue = cols.value;
  const contentValue = content.value;

  const table = document.createElement("table");

  for (let i = 0; i < rowsValue; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < colsValue; j++) {
      const td = document.createElement("td");
      td.textContent = contentValue;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  document.body.appendChild(table);
};

/*
створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
*/

const div = document.getElementById("div");
const price = document.getElementById("price");
const interval = 10000;

const currentlocalData = JSON.parse(localStorage.getItem("amountData"));
if (!currentlocalData) {
  localStorage.setItem(
    "amountData",
    JSON.stringify({ amount: 100, lastVisit: Date.now() })
  );
  price.textContent = 100;
} else {
  if (currentlocalData.amount) {
    price.textContent = currentlocalData.amount;
  }
}

window.onload = () => {
  const data = JSON.parse(localStorage.getItem("amountData"));

  if (data.lastVisit) {
    if (data.lastVisit < Date.now() - interval) {
      price.textContent = data.amount + 10;
      localStorage.setItem(
        "amountData",
        JSON.stringify({ amount: data.amount + 10, lastVisit: Date.now() })
      );
    } else {
      console.log(
        "You can't add 10, because you reloaded the page earlier than 10 seconds ago"
      );
    }
  }
};
