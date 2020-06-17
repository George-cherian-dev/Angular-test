import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishData';
import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes() : Observable<Dish []>{
    
    return of(DISHES).pipe(delay(1500));
  }
  getDish(id:string): Observable<Dish> {
    
    console.log("test"+id);
    return of(DISHES.filter((dish) => {return dish.id === id})[0]).pipe(delay(1500));

  }
  getFeaturedDish(): Observable<Dish> {
    
    return of(DISHES.filter((dish) => {return dish.featured})[0]).pipe(delay(1500));

  }
  getDishIds(): Observable<string []>{
    return of(DISHES.map(dish => dish.id)).pipe(delay(1500));
  }
}
