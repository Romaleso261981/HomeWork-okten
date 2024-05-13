/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)

- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/

function User(id, name, surname, email, phone) {
  this.name = name;
  this.id = id;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let users = [];
for (let i = 0; i < 10; i++) {
  users.push(new User(i, `name${i}`, `surname${i}`, `email${i}`, `phone${i}`));
}

console.log(users);

/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/

// console.log("об'єкти з парними id", users.filter(user => user.id % 2 === 0));

/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
*/

// console.log("id. по зростанню", users.sort((a, b) => a.id - b.id));

/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/

class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

const roma = new Client("01", "Roma", "Roma", "Roma", "Roma", [
  "apple",
  "banana",
  "orange"
]);

let clients = [];

for (let i = 0; i < 10; i++) {
  clients.push(
    new Client(i, `name${i}`, `surname${i}`, `email${i}`, `phone${i}`, [
      "apple",
      "banana",
      "orange"
    ])
  );
}

console.log("clients", clients);

/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

function Car2(
  model,
  manufacturer,
  yearOfManufacture,
  maxSpeed,
  engineCapacity
) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.yearOfManufacture = yearOfManufacture;
  this.maxSpeed = maxSpeed;
  this.engineCapacity = engineCapacity;
  this.driver = null;
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину.`);
  };
  this.info = function () {
    console.log(
      this.yearOfManufacture,
      this.maxSpeed,
      this.engineCapacity,
      this.manufacturer,
      this.model
    );
  };
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
  };
  this.changeYear = function (newValue) {
    this.yearOfManufacture = newValue;
  };
  this.addDriver = function (driver) {
    this.driver = driver;
  };
}

const mercedes = new Car2("Mercedes", "Mercedes", 1990, 120, 2.5);

mercedes.drive();
mercedes.info();
mercedes.increaseMaxSpeed(10);
mercedes.changeYear(1991);
mercedes.addDriver({ name: "driver", age: 25 });

/*
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

class Car {
  constructor(
    model,
    manufacturer,
    yearOfManufacture,
    maxSpeed,
    engineCapacity
  ) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = null;
  }

  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину.`);
  }

  info() {
    console.log(
      this.yearOfManufacture,
      this.maxSpeed,
      this.engineCapacity,
      this.manufacturer,
      this.model
    );
  }

  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
  }

  changeYear(newValue) {
    this.yearOfManufacture = newValue;
  }

  addDriver(driver) {
    this.driver = driver;
  }
}

const volga = new Car("Volga", "GAZ", 1990, 120, 2.5);

volga.drive();
volga.info();
volga.increaseMaxSpeed(10);
volga.changeYear(1991);
volga.addDriver({ name: "driver", age: 25 });

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

const Cinderellas = [];

for (let i = 0; i < 10; i++) {
  Cinderellas.push(new Cinderella(`Cinderella${i + 1}`, i, i + 1));
}

console.log("Cinderellas", Cinderellas);

class Prince {
  constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
}

const prince = new Prince("Prince", 25, 7);

for (let i = 0; i < Cinderellas.length; i++) {
  if (Cinderellas[i].footSize === prince.shoeSize) {
    console.log("Cinderella", Cinderellas[i]);
  }
}

const cinderella = Cinderellas.find((c) => c.footSize === prince.shoeSize);

console.log("cinderella", cinderella);
