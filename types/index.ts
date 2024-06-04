interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  servings: number;
  ingredients: Array<string>;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
}
