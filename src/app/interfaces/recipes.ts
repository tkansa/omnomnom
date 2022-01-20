export interface Recipes {
  hits: [
    {
      recipe: Recipe[];
    }
  ];
}

export interface Recipe {
  "uri": string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  ingredientLines: string[];
  ingredients: [{ text: string; weight: string }];
}
