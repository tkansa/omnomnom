import { Component, OnInit } from '@angular/core';
import { Recipes } from '../interfaces/recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipes;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(  
      (data: Recipes) => this.recipes = { ...data }, 
      error => console.error(error)
    )
  }

}
