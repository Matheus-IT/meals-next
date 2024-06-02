import BadgeFilter from "@/components/ui/badge-filter";
import RecipeList from "@/components/ui/recipe-list";

const getRecipes = async (): Promise<Recipe[]> => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  if (data) return data.recipes;
  return [];
};
export default async function Home() {
  const recipes: Recipe[] = await getRecipes();

  return (
    <div className="xl:px-24 px-10">
      <div className="my-12">
        <BadgeFilter />

        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}
