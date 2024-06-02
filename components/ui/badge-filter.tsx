"use client";

import { useContext, useState } from "react";
import { Badge } from "./badge";
import { RecipeContext } from "@/context/recipe-context";

export default function BadgeFilter() {
  const { dispatch } = useContext(RecipeContext);
  const cuisines: string[] = [
    "All",
    "Asian",
    "American",
    "Greek",
    "Italian",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Mexican",
    "Pakistani",
  ];

  function handleClickCuisineBadge(
    event: React.MouseEvent<HTMLDivElement>,
    cuisine: string
  ) {
    event.preventDefault();
    dispatch({
      type: "SELECTED_CUISINE",
      payload: {
        selectedCuisine: cuisine,
      },
    });
  }

  return (
    <>
      {cuisines.map((cuisine, index) => (
        <Badge
          key={`${cuisine}-${index}`}
          variant="outline"
          className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in-out duration-200"
          onClick={(e) => handleClickCuisineBadge(e, cuisine)}
        >
          {cuisine}
        </Badge>
      ))}
    </>
  );
}
