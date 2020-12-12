export const showRecipe = recipe => {
console.log(recipe)
  const recipeArr= recipe.data.recipe
  console.log(recipeArr)
const html = 
  `<figure class="recipe__fig">
              <img src="${recipeArr.image_url}" alt="Tomato" class="recipe__img">
              <h1 class="recipe__title">
                  <span>${recipeArr.title}</span>
              </h1>
  </figure>
  <div class="recipe__details">
              <div class="recipe__info">
                  <svg class="recipe__info-icon">
                      <use href="img/icons.svg#icon-stopwatch"></use>
                  </svg>
                  <span class="recipe__info-data recipe__info-data--minutes">${recipeArr.cooking_time}</span>
                  <span class="recipe__info-text"> minutes</span>
              </div>
​
              <div class="recipe__info">
              <svg class="recipe__info-icon">
                  <use href="img/icons.svg#icon-man"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${recipeArr.servings}</span>
              <span class="recipe__info-text"> servings</span>
​
              <div class="recipe__info-buttons">
                  <button class="btn-tiny">
                      <svg>
                          <use href="img/icons.svg#icon-circle-with-minus"></use>
                      </svg>
                  </button>
                  <button class="btn-tiny">
                      <svg>
                          <use href="img/icons.svg#icon-circle-with-plus"></use>
                      </svg>
                  </button>
              </div></div>
              <button class="recipe__love">
                  <svg class="header__likes">
                      <use href="img/icons.svg#icon-heart-outlined"></use>
                  </svg>
              </button>
          </div>
​
​
​
          <div class="recipe__ingredients">
              <ul class="recipe__ingredient-list">
                  <li id="${recipeArr.id}" class="recipe__item">
                      <svg class="recipe__icon">
                          <use href="img/icons.svg#icon-check"></use>
                      </svg>
                      <div class="recipe__count">${recipeArr.ingredients[0].quantity}</div>
                      <div class="recipe__ingredient">
                          <span class="recipe__unit">${recipeArr.ingredients[0].unit}</span>
                         <span class="name"> ${recipeArr.ingredients[0].description}</span>
                      </div>
                  </li>
​
                  <li id="${recipeArr.id} class="recipe__item">
                      <svg class="recipe__icon">
                          <use href="img/icons.svg#icon-check"></use>
                      </svg>
                      <div class="recipe__count">${recipeArr.ingredients[1].quantity}</div>
                      <div class="recipe__ingredient">
                          <span class="recipe__unit">${recipeArr.ingredients[1].unit}</span>
                          <span class="name"> ${recipeArr.ingredients[1].description}</span>
                      </div>
                  </li>
​
                  <li id="${recipeArr.id} class="recipe__item">
                      <svg class="recipe__icon">
                          <use href="img/icons.svg#icon-check"></use>
                      </svg>
                      <div class="recipe__count">${recipeArr.ingredients[2].quantity}</div>
                      <div class="recipe__ingredient">
                          <span class="recipe__unit">${recipeArr.ingredients[2].unit}</span>
                          <span class="name"> ${recipeArr.ingredients[2].description}</span>
                      </div>
                  </li>
​
​
                  <li id="${recipeArr.id} class="recipe__item">
                      <svg class="recipe__icon">
                          <use href="img/icons.svg#icon-check"></use>
                      </svg>
                      <div class="recipe__count">${recipeArr.ingredients[3].quantity}</div>
                      <div class="recipe__ingredient">
                          <span class="recipe__unit">${recipeArr.ingredients[3].unit}</span>
                          <span class="name"> ${recipeArr.ingredients[3].description}</span>
                      </div>
                  </li>
​
                  <li id="${recipeArr.id} class="recipe__item">
                      <svg class="recipe__icon">
                          <use href="img/icons.svg#icon-check"></use>
                      </svg>
                      <div class="recipe__count">${recipeArr.ingredients[4].quantity}</div>
                      <div class="recipe__ingredient">
                          <span class="recipe__unit">${recipeArr.ingredients[4].unit}</span>
                          <span class="name"> ${recipeArr.ingredients[4].description}</span>
                      </div>
                  </li>
​
                  <li id="${recipeArr.id} class="recipe__item">
                      <svg class="recipe__icon">
                          <use href="img/icons.svg#icon-check"></use>
                      </svg>
                      <div class="recipe__count">${recipeArr.ingredients[5].quantity}</div>
                      <div class="recipe__ingredient">
                          <span class="recipe__unit">${recipeArr.ingredients[5].unit}</span>
                          <span class="name"> ${recipeArr.ingredients[5].description}</span>
                      </div>
                  </li>
              </ul>
              <button class="btn-small recipe__btn">
              <svg class="search__icon">
                  <use href="img/icons.svg#icon-shopping-cart"></use>
              </svg>
              <span>Add shopping list</span>
          </button>
      </div>
      <div class="recipe__directions">
      <h2 class="heading-2">How to cook it</h2>
      <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
      </p>
      <a class="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
              <use href="img/icons.svg#icon-triangle-right"></use>
          </svg>
​
      </a>
  </div>
  
</div>`
document.querySelector('.recipe').innerHTML = html;   
// document.querySelector('.recipe').insertAdjacentHTML("beforeend", html); 
};
