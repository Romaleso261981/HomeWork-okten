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
- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
*/

let currentPage = 1;
const itemsPerPage = 5;
const cartsWrapper = document.getElementById("carts");
cartsWrapper.classList.add("cradsWrapper");
const paginationWrapper = document.getElementById("pagination");

function fetchCarts(page) {
  fetch("https://dummyjson.com/carts")
    .then((value) => value.json())
    .then(({ carts }) => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = page * itemsPerPage;
      const paginatedCarts = carts.slice(startIndex, endIndex);

      cartsWrapper.innerHTML = "";
      paginatedCarts.forEach((cart) => {
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

        cart.products.forEach((product) => {
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

        cartsWrapper.appendChild(div);
      });

      paginationWrapper.innerHTML = "";
      paginationWrapper.classList.add("paginationWrapper");
      const totalPages = Math.ceil(carts.length / itemsPerPage);

      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add("paginationButton");
        if (i === page) {
          button.classList.add("active");
        }
        button.innerText = i;
        button.addEventListener("click", () => {
          currentPage = i;
          fetchCarts(i);
        });
        paginationWrapper.appendChild(button);
      }
    });
}

document.addEventListener("DOMContentLoaded", () => fetchCarts(currentPage));

/*
- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
*/

let limit = 3;
const recipesWrapper = document.getElementById("recipes");

function fetchRecipes() {
  fetch(`https://dummyjson.com/recipes?limit=${limit}`)
    .then((value) => value.json())
    .then(({ recipes }) => {
      recipesWrapper.innerHTML = ""; // Очистка попереднього контенту
      recipesWrapper.classList.add("recipeWrapper");

      for (const recipe of recipes) {
        const div = document.createElement("div");
        div.classList.add("recipeDiv");

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("imageWrapper");
        const image = document.createElement("img");
        image.src = recipe.image;
        imageWrapper.appendChild(image);

        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("contentWrapper");

        const tittle = document.createElement("h2");
        tittle.classList.add("recipeTittle");
        tittle.innerText = recipe.name;

        const rating = document.createElement("p");
        rating.classList.add("rating");
        rating.innerText = `Rating: ${recipe.rating}`;

        const ingredientsWrapper = document.createElement("div");
        ingredientsWrapper.classList.add("ingredientsWrapper");
        const ingredientsTitle = document.createElement("h3");
        ingredientsTitle.className = "title";
        ingredientsTitle.innerText = "Ingredients";

        const ingredients = document.createElement("div");
        ingredients.classList.add("ingredientsList");
        recipe.ingredients.forEach((ingredient) => {
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
        recipe.instructions.forEach((instruction) => {
          const p = document.createElement("p");
          p.innerText = instruction;
          instructions.appendChild(p);
        });

        instructionsWrapper.appendChild(instructionsTitle);
        instructionsWrapper.appendChild(instructions);

        contentWrapper.appendChild(tittle);
        contentWrapper.appendChild(rating);
        contentWrapper.appendChild(instructionsWrapper);
        contentWrapper.appendChild(ingredientsWrapper);

        div.appendChild(imageWrapper);
        div.appendChild(contentWrapper);
        recipesWrapper.appendChild(div);
      }

      const button = document.createElement("button");
      button.innerText = "Load more";
      button.classList.add("loadMore");
      button.addEventListener("click", () => {
        limit += 3;
        fetchRecipes(); // Виклик функції для оновлення списку
      });

      recipesWrapper.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", fetchRecipes);

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
