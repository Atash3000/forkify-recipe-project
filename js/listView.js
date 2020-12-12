
export const addShopping = recipe => {
   
    const recipeArr1 = recipe.data.recipe.ingredients
    //console.log(recipeArr1)

    recipeArr1.forEach(element=>{
    
      const html = 
      `<li class="shopping__item">
         <div class="shopping__count">
           <input type="number" value="${element.quantity}" step="100">
             <p>${element.unit}</p>
         </div>
        <p class="shopping__description">${element.description}</p>
        <button class="shopping__delete btn-tiny">
         <svg>
         <use href="img/icons.svg#icon-circle-with-cross"></use>
       </svg>
    </button>
     </li>`
    
     //document.querySelector('.shopping__list').innerHTML=html
     document.querySelector('.shopping__list').insertAdjacentHTML("beforebegin", html);
    })
    
  };



    


