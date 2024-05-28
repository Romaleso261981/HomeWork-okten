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

/*
Helpers function for rendering carts
*/

const createElement = (typeElement, classLists, content) => {
  const element = document.createElement(typeElement);
  if (classLists && Array.isArray(classLists)) {
    classLists.forEach((classList) => {
      element.classList.add(classList);
    });
  }
  element.textContent = content;
  return element;
};

const findElement = (className, classLists, content) => {
  let element = document.querySelector(className);
  if (classLists && Array.isArray(classLists)) {
    classLists.map((classList) => {
      element.classList.add(classList);
    });
  }
  if (content) {
    element.textContent = content;
  }
  return element;
};

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
        const cartDiv = createElement("div", ["cartDiv"], "");
        const amountWrapper = createElement("div", ["amountWrapper"], "");
        const id = createElement("span", ["cardId"], `id: ${cart.id}`);
        const discountedTotal = createElement(
          "p",
          ["discountedTotal"],
          `discountedTotal: ${cart.discountedTotal}`
        );
        const total = createElement("p", ["total"], `total: ${cart.total}`);
        const totalProducts = createElement(
          "p",
          ["totalProducts"],
          `totalProducts: ${cart.totalProducts}`
        );
        const totalQuantity = createElement(
          "p",
          ["totalQuantity"],
          `totalQuantity: ${cart.totalQuantity}`
        );
        const productsWrapper = createElement("div", ["productsWrapper"], "");
        const productsTitle = createElement(
          "h3",
          ["productsTitle"],
          "Products"
        );

        cart.products.forEach((product) => {
          const productWrapper = createElement("div", ["productWrapper"], "");
          const productTitle = createElement(
            "h4",
            ["productTitle"],
            product.title
          );

          const productImage = createElement("img", ["productImage"], "");
          productImage.src = product.thumbnail;

          productWrapper.appendChild(productTitle);
          productWrapper.appendChild(productImage);

          productsWrapper.appendChild(productWrapper);
        });

        amountWrapper.appendChild(discountedTotal);
        amountWrapper.appendChild(total);
        amountWrapper.appendChild(totalProducts);
        amountWrapper.appendChild(totalQuantity);

        const orderButtonWrapper = document.createElement("div");
        orderButtonWrapper.classList.add("orderButtonWrapper");
        const orderButton = document.createElement("button");
        orderButton.classList.add("orderButton");
        orderButton.innerText = "Order";
        orderButton.addEventListener("click", () => {
          alert("Order is successful");
        });
        const clearBasketButton = document.createElement("button");
        clearBasketButton.classList.add("clearBasketButton");
        clearBasketButton.innerText = "Clear";
        clearBasketButton.addEventListener("click", () => {
          alert("Basket is cleared");
        });

        orderButtonWrapper.appendChild(orderButton);
        orderButtonWrapper.appendChild(clearBasketButton);

        cartDiv.appendChild(productsWrapper);
        cartDiv.appendChild(amountWrapper);
        cartDiv.appendChild(orderButtonWrapper);

        cartsWrapper.appendChild(cartDiv);
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
