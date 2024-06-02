import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

  return (
    <div>
      {cuisines.map((cuisine, index) => (
        <Badge
          key={`${cuisine}-${index}`}
          variant="outline"
          className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200"
        >
          {cuisine}
        </Badge>
      ))}
    </div>
  );
}
