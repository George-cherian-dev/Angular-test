import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish [];

  selectedDish: Dish ;

  constructor(private dishService:DishService) {

   }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }
  
  onSelectDish(selectedDishItem:Dish){
    if(this.selectedDish === selectedDishItem){
      this.selectedDish = null;
      return;
    }
    this.selectedDish = selectedDishItem
    console.log(this.selectedDish.name)
  }
}
