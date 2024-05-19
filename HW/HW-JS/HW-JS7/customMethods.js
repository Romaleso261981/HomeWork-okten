const users2 = [
  {
    id: 1,
    name: "name1",
    surname: "surname1",
    email: "email1",
    isAdmin: true,
    phone: "phone1"
  },
  {
    id: 2,
    name: "name2",
    surname: "surname2",
    email: "email2",
    isAdmin: false,
    phone: "phone2"
  },
  {
    id: 3,
    name: "name3",
    surname: "surname3",
    email: "email3",
    isAdmin: true,
    phone: "phone3"
  },
  {
    id: 4,
    name: "Vasya",
    surname: "surname4",
    email: "email4",
    isAdmin: false,
    phone: "phone4"
  },
  {
    id: 5,
    name: "name5",
    surname: "surname5",
    email: "email5",
    isAdmin: true,
    phone: "phone5"
  },
  {
    id: 6,
    name: "Roman",
    surname: "surname6",
    email: "email6",
    isAdmin: false,
    phone: "phone6"
  },
  {
    id: 7,
    name: "name7",
    surname: "surname7",
    email: "email7",
    isAdmin: true,
    phone: "phone7"
  },
  {
    id: 8,
    name: "name8",
    surname: "surname8",
    email: "email8",
    isAdmin: true,
    phone: "phone8"
  },
  {
    id: 9,
    name: "name9",
    surname: "surname9",
    email: "email9",
    isAdmin: true,
    phone: "phone9"
  },
  {
    id: 10,
    name: "name10",
    surname: "surname10",
    email: "email10",
    isAdmin: true,
    phone: "phone10"
  }
];

Array.prototype.myFilter = function myFilter(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

// console.log(users2.myFilter((user) => user.isAdmin));

// функція сортировки яка не міняє початковий масив

Array.prototype.mySort = function mySort(callback) {
  const newArr = [...this];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1; j++) {
      if (callback(newArr[j], newArr[j + 1]) > 0) {
        const temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  return newArr;
};

const arrNumber = [3, 2, 1, 4, 5, 75, 6, 8, 11, 100];
const f = () => {
  console.log("оригінальний масив", arrNumber);

  const newArr2 = arrNumber.mySort((a, b) => a > b);
  console.log(
    "початковий масив після ого як відпрацювала функція сортировки",
    arrNumber
  );
  console.log("відсортирований массив", newArr2);
};

// f();

// функція сортировки яка міняє початковий масив

Array.prototype.mySort2 = function mySort(callback) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (callback(this[j], this[j + 1]) > 0) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }

  return this;
};

const j = () => {
  console.log("оригінальний масив", arrNumber);

  const newArr2 = arrNumber.mySort2((a, b) => a > b);
  console.log(
    "початковий масив після ого як відпрацювала функція сортировки",
    arrNumber
  );
  console.log("відсортирований массив", newArr2);
};

j();

// кастомна функція map

Array.prototype.myMap = function myMap(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;
};

users2.myMap((user) => {
  return (
    document.write(`<div class="container shadow">`),
    document.write(`${user.name} ${user.surname} ${user.email} ${user.phone}`),
    document.write("</div>")
  );
});
