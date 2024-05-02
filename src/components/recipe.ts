export type Recipe = {
    id: number;
    title: string;
    preparation: string;
    preparationTime: number;
    ingredients: string;
}

export const addRecipe = (recipe: Recipe) => {
    const allRecipes = localStorage.getItem("recipes");
    if (allRecipes) {
        const allRecipesParsed = JSON.parse(allRecipes);
        localStorage.setItem("recipes", JSON.stringify([...allRecipesParsed, recipe]))
    }
    else localStorage.setItem("recipes", JSON.stringify([recipe])) 
}

export const getAllRecipes = () : Recipe[] => {
    const allRecipes = localStorage.getItem("recipes");
    if (allRecipes) {
        return JSON.parse(allRecipes);
    }
    else return [];
}