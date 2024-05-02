import { Recipe, addRecipe, getAllRecipes } from './components/recipe';
import { addFormularBtn, addRecipeButton, formContainer, recipeIngredientsTextarea, recipeListContainer, recipeNameInput, recipePreparationTextarea, recipeTimeInput } from './dom-utils';
// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';
const formContainerElement = document.getElementById('form-container');

//if (toggleButton && divContainer)
addFormularBtn.addEventListener("click", () => {
  formContainer.style.display="block"; 
});
//addRecipeButton.addEventListener("click", ()=>{
  //const recipeName = recipeNameInput.value;
//});
addRecipeButton.addEventListener("click", () => {
  const recipeName = recipeNameInput.value;
  const recipeIngredients = recipeIngredientsTextarea.value;
  const recipePreparation = recipePreparationTextarea.value;
  const recipeTime = Number(recipeTimeInput.value);
  const id = new Date().getTime();
  addRecipe({id: id, title: recipeName, preparation: recipePreparation, preparationTime: recipeTime, ingredients: recipeIngredients});
  recipeList();
});

const recipeList = () => {
  const allRecipes: Recipe[] = getAllRecipes();
  recipeListContainer.innerHTML = "";
  for(let recipe of allRecipes) {
    const recipeContainer = document.createElement("div");
    recipeContainer.className = "recipeItem";
    const recipeTitle = document.createElement("h4");
    recipeTitle.className = "recipeTitle";
    recipeTitle.textContent = recipe.title;
    const recipeIngredients = document.createElement("p");
    recipeIngredients.className = "recipeIngredients";
    recipeIngredients.textContent = recipe.ingredients;

    recipeContainer.appendChild(recipeTitle);
    recipeContainer.appendChild(recipeIngredients);

    recipeListContainer.appendChild(recipeContainer);

    
  }
}
recipeList();