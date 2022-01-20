import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe, Recipes } from './interfaces/recipes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeUrl = "https://api.edamam.com/search?q=vegetable&app_id=c0ad6829&app_key=979b34af2f0ee5f39a5acb13dcc0e019"

  constructor(private http: HttpClient) { }

  getRecipes() {
    
    return this.http.get<Recipes>(this.recipeUrl);
  }
}
