import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import { useEffect, useState } from "react";

export default function Home() {
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   console.log("useEffect");

  //   async function getRecipes() {
  //     const res = await fetch("https://dummyjson.com/recipes");
  //     const data = await res.json();
  //     if (data) {
  //       console.log("data", data);

  //       // setRecipes(data);
  //     }
  //   }

  //   getRecipes();
  // }, []);

  const cuisines: string[] = ["b1", "b2", "b3"];
  const recipes = [
    {
      name: "one",
      servings: 2,
      prepTimeMinutes: 5,
      cookTimeMinutes: 5,
    },
  ];

  return (
    <div className="xl:px-24 px-10">
      <div className="my-12">
        {cuisines.map((cuisine, index) => (
          <Badge
            key={`${cuisine}-${index}`}
            variant="outline"
            className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in-out duration-200"
          >
            {cuisine}
          </Badge>
        ))}

        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40">
          {recipes.map((recipe, index) => (
            <Card
              key={`${recipe.name}-${index}`}
              className="flex flex-col bg-orange-50 hover:scale-105 ease-in-out duration-200 xl:min-h-[600px] fancyGradient"
            >
              <CardHeader>{/* image */}</CardHeader>
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
          ))}
        </div>
      </div>
    </div>
  );
}
