import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishData';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes() : Promise<Dish []>{
    
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(DISHES);
      }, 1500);
    });
  }
  getDish(id:string): Promise<Dish> {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(DISHES.filter((dish) => {return dish.id === id})[0]);
      }, 1500);
    });
  }
  getFeaturedDish(): Promise<Dish> {
    
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(DISHES.filter((dish) => {return dish.featured})[0]);
      }, 1500);
    });
  }
}
