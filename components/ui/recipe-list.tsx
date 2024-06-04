"use client";
import { useContext, useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { RecipeContext } from "@/context/recipe-context";
import Image from "next/image";
import Link from "next/link";

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  async function getFilteredRecipes() {
    const filteredRecipesByCuisine = recipes.filter(
      (recipe) => recipe.cuisine === selectedCuisine
    );
    setFilterRecipes(filteredRecipesByCuisine);
  }

  const [filterRecipes, setFilterRecipes] = useState<Recipe[]>([]);
  const {
    state: { selectedCuisine },
  } = useContext(RecipeContext);

  useEffect(() => {
    if (selectedCuisine) {
      getFilteredRecipes();
    }
  }, [recipes, selectedCuisine]);

  return (
    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40">
      {(filterRecipes.length > 0 ? filterRecipes : recipes).map(
        (recipe, index) => (
          <Link href={`/recipes/${recipe.id}`} key={`${recipe.name}-${index}`}>
            <Card className="flex flex-col bg-orange-50 hover:scale-105 ease-in-out duration-200 xl:min-h-[600px] fancyGradient">
              <CardHeader>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  width={500}
                  height={500}
                  className="bg-cover ronded-md shadow-xl"
                />
              </CardHeader>
              <CardContent className="uppercase lg:text-3xl relative font-bold line-clamp-2">
                <p>{recipe.name}</p>
              </CardContent>
              <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                <div className="flex flex-col">
                  <p className="text-lg">Serves</p>
                  <p className="text-gray-800">{recipe.servings}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Prep Time</p>
                  <p className="text-gray-800">{recipe.prepTimeMinutes}m</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Cook Time</p>
                  <p className="text-gray-800">{recipe.cookTimeMinutes}m</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        )
      )}
    </div>
  );
}
