export async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  if (data) return data.recipes;
  return [];
}
