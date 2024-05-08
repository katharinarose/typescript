import { speakText } from './components/WebSpeech';
import { Recipe, addRecipe, getAllRecipes, removeRecipe } from './components/recipe';
import { addFormularBtn, addRecipeButton, deleteButton, formContainer, recipeIngredientsTextarea, recipeListContainer, recipeNameInput, recipePreparationTextarea, recipeTimeInput} from './dom-utils';
// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';
const formContainerElement = document.getElementById('form-container');


//if (toggleButton && divContainer)
addFormularBtn.addEventListener("click", () => {
  formContainer.style.display="block"; 
});


  addRecipeButton.addEventListener('click', () => {
  const recipeName = recipeNameInput.value;
  const recipeIngredients = recipeIngredientsTextarea.value;
  const recipePreparation = recipePreparationTextarea.value;
  const recipeTime = Number(recipeTimeInput.value);
  const id = new Date().getTime(); 

  if (!recipeName || !recipeIngredients || !recipePreparation || !recipeTime) {
    alert('Bitte fülle alle Felder aus!');
  }
  else {
    addRecipe({id: id, title: recipeName, preparation: recipePreparation, recipeTime: recipeTime, ingredients: recipeIngredients});
    recipeList();

    recipeNameInput.value = '';
    recipeIngredientsTextarea.value = '';
    recipePreparationTextarea.value = '';
    recipeTimeInput.value = '';

    formContainer.style.display = 'none';
  }
});

const recipeList = () => {
  const allRecipes: Recipe[] = getAllRecipes();
  recipeListContainer.innerHTML = "";
  for(let recipe of allRecipes) {
    const recipeContainer = document.createElement("div");
    recipeContainer.className = "recipeItem";
    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";
    const recipeTitle = document.createElement("h4");
    recipeTitle.className = "recipeTitle";
    recipeTitle.textContent = recipe.title;
    const deleteButton = document.createElement("div");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`;
    const textToSpeakBtn = document.createElement("div");
    textToSpeakBtn.className = "speaktextBtn";
    textToSpeakBtn.textContent = `vorlesen`;
    const ingredientContainer = document.createElement("div");
    ingredientContainer.className = "ingredientContainer";
    const recipeIngredients = document.createElement("p");
    recipeIngredients.className = "recipeIngredients";
    recipeIngredients.textContent = recipe.ingredients;
    const preparationContainer = document.createElement("div");
    preparationContainer.className = "preparationContainer";
    const recipePreparation = document.createElement("p");
    recipePreparation.className = "recipePreparation";
    recipePreparation.textContent = recipe.preparation;
    const timeContainer = document.createElement("div");
    timeContainer.className = "timeContainer";
    const recipeTime = document.createElement("p");
    recipeTime.className = "recipeTime";
    recipeTime.textContent = `Gesamtdauer: ${recipe.recipeTime} min`; 

  

    titleContainer.appendChild(recipeTitle);
    titleContainer.appendChild(textToSpeakBtn);
    recipeContainer.appendChild(titleContainer);
    ingredientContainer.appendChild(recipeIngredients);
    recipeContainer.appendChild(ingredientContainer);
    recipeContainer.appendChild(deleteButton);
    preparationContainer.appendChild(recipePreparation);
    recipeContainer.appendChild(preparationContainer);
    timeContainer.appendChild(recipeTime);
    recipeContainer.appendChild(timeContainer);
    
    recipeListContainer.appendChild(recipeContainer);
    
    textToSpeakBtn.onclick = () => {
      const title = recipeTitle.textContent ? recipeTitle.textContent : "";
      const ingredients = recipeIngredients.textContent ? recipeIngredients.textContent : "";
      const preparation = recipePreparation.textContent ? recipePreparation.textContent : "";
      const time = recipeTime.textContent ? recipeTime.textContent : "";
      const text = title + ingredients + preparation + time;
      speakText(text);
    }
    
    deleteButton.onclick = () => {
      removeRecipe(recipe.id);
      recipeList();
    }
  }
}
recipeList();


