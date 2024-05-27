/*
- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

-Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

- зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
 =======================================================================================================================
 */

/*
- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
*/

fetch("https://dummyjson.com/carts")
  .then((value) => value.json())
  .then(({ carts }) => {
    console.log(carts);
    return carts.map((cart) => {
      const cradsWrapper = document.getElementById("carts");
      cradsWrapper.classList.add("cradsWrapper");

      const div = document.createElement("div");
      div.classList.add("cartDiv");

      const amountWrapper = document.createElement("div");
      amountWrapper.classList.add("amountWrapper");

      const id = document.createElement("span");
      id.classList.add("cardId");
      id.innerText = `id: ${cart.id}`;

      const discountedTotal = document.createElement("p");
      discountedTotal.classList.add("discountedTotal");
      discountedTotal.innerText = `discountedTotal: ${cart.discountedTotal}`;

      const total = document.createElement("p");
      total.classList.add("total");
      total.innerText = `total: ${cart.total}`;

      const totalProducts = document.createElement("p");
      totalProducts.classList.add("totalProducts");
      totalProducts.innerText = `totalProducts: ${cart.totalProducts}`;

      const totalQuantity = document.createElement("p");
      totalQuantity.classList.add("totalQuantity");
      totalQuantity.innerText = `totalQuantity: ${cart.totalQuantity}`;

      const productsWrapper = document.createElement("div");
      productsWrapper.classList.add("productsWrapper");
      const productsTitle = document.createElement("h3");
      productsTitle.className = "productsTitle";
      productsTitle.innerText = "Products";

      cart.products.map((product) => {
        const productWrapper = document.createElement("div");
        productWrapper.classList.add("productWrapper");
        const productTitle = document.createElement("h4");
        productTitle.className = "productTitle";
        productTitle.innerText = product.title;

        const productImage = document.createElement("img");
        productImage.classList.add("productImage");
        productImage.src = product.thumbnail;

        productWrapper.appendChild(productTitle);
        productWrapper.appendChild(productImage);

        productsWrapper.appendChild(productWrapper);
      });

      amountWrapper.appendChild(discountedTotal);
      amountWrapper.appendChild(total);
      amountWrapper.appendChild(totalProducts);
      amountWrapper.appendChild(totalQuantity);

      div.appendChild(productsWrapper);
      div.appendChild(amountWrapper);

      cradsWrapper.appendChild(div);
    });
  });

/*
- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
*/

fetch("https://dummyjson.com/recipes")
  .then((value) => value.json())
  .then(({ recipes }) => {
    for (const recipe of recipes) {
      const usersWrapper = document.getElementById("recipes");
      usersWrapper.classList.add("recipeWrapper");

      const div = document.createElement("div");
      div.classList.add("recipeDiv");

      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("imageWrapper");
      const image = document.createElement("img");
      image.src = recipe.image;
      imageWrapper.appendChild(image);

      const contentWrapper = document.createElement("div");
      contentWrapper.classList.add("contentWrapper");

      const a = document.createElement("a");
      a.href = `user-details.html?id=${recipe.id}`;
      a.innerText = `${recipe.id} ${recipe.name}`;

      const rating = document.createElement("p");
      rating.classList.add("rating");
      rating.innerText = `rating: ${recipe.rating}`;

      const ingredientsWrapper = document.createElement("div");
      ingredientsWrapper.classList.add("ingredientsWrapper");
      const ingredientsTitle = document.createElement("h3");
      ingredientsTitle.className = "title";
      ingredientsTitle.innerText = "Ingredients";

      const ingredients = document.createElement("div");
      ingredients.classList.add("ingredientsList");
      recipe.ingredients.map((ingredient) => {
        const p = document.createElement("p");
        p.innerText = ingredient;
        ingredients.appendChild(p);
      });

      ingredientsWrapper.appendChild(ingredientsTitle);
      ingredientsWrapper.appendChild(ingredients);

      const instructionsWrapper = document.createElement("div");
      instructionsWrapper.classList.add("instructionsWrapper");
      const instructionsTitle = document.createElement("h3");
      instructionsTitle.className = "title";
      instructionsTitle.innerText = "Instructions";
      const instructions = document.createElement("div");
      instructions.classList.add("instructionsList");
      recipe.instructions.map((instruction) => {
        const p = document.createElement("p");
        p.innerText = instruction;
        instructions.appendChild(p);
      });

      instructionsWrapper.appendChild(instructionsTitle);
      instructionsWrapper.appendChild(instructions);

      contentWrapper.appendChild(rating);
      contentWrapper.appendChild(instructionsWrapper);
      contentWrapper.appendChild(ingredientsWrapper);
      contentWrapper.appendChild(a);

      div.appendChild(imageWrapper);
      div.appendChild(contentWrapper);
      usersWrapper.appendChild(div);
    }
  });

/*
- зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
*/

function handleUserDetail(id) {
  window.location.href = `userDetail.html?id=${id}`;
  localStorage.setItem("userId", id);
}

function userRender(user) {
  const usersWrapper = document.getElementById("users");
  usersWrapper.classList.add("usersWrapper");

  const div = document.createElement("div");
  div.classList.add("userDiv");
  div.addEventListener("click", () => handleUserDetail(user.id));
  const a = document.createElement("a");
  a.innerText = `${user.id} ${user.name}`;

  const email = document.createElement("p");
  email.classList.add("email");
  email.innerText = user.email;

  const phone = document.createElement("p");
  phone.classList.add("phone");
  phone.innerText = user.phone;

  const website = document.createElement("p");
  website.classList.add("website");
  website.innerText = user.website;

  // div.appendChild(email);
  // div.appendChild(phone);
  // div.appendChild(website);

  div.appendChild(a);

  usersWrapper.appendChild(div);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((value) => value.json())
  .then((users) => {
    for (const user of users) {
      userRender(user);
    }
  });
