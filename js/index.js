
import {renderRecipe} from './searchView.js'
import {showRecipe} from './recipeView.js'
import {addShopping} from './listView.js'
// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');

const apiKey = '322dabbb-55d8-4ca0-8018-69c4acd8b8cd'
const url = 'https://forkify-api.herokuapp.com/api/v2/recipes?search='
// Add AJAX functions here:
const getRecipe = async () => {
    const urlFetch =`${url}${input.value}&key${apiKey}`
try{
const response = await fetch(urlFetch)
if(response.ok){
    const responseJson = await response.json()
    renderRecipe(responseJson)
  
}else{

    throw new Error('response failed')
}
}catch(err){
    console.log(err)
    }

    }


const getOneRecipe = async (id) => {
    const url2 ='https://forkify-api.herokuapp.com/api/v2/recipes/'
    const urlFetch = `${url2}${id}?key=${apiKey}`

    try{
const response = await fetch(urlFetch)
if(response.ok){
    const responseJson = await response.json()
  
showRecipe(responseJson)
addShopping(responseJson)
//console.log(responseJson)
}else{
    throw new Error('response failed')
}
}catch(err){
        console.log(err)
    }
    }


    document.querySelector('.results').addEventListener('click',e=>getOneRecipe(e.target.closest('a').id))


    submitBtn.addEventListener('click',getRecipe) 


