import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY } from '@angular/cdk/overlay/overlay-directives';


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
    this.dishService.getDishes()
    .then((dishes) => {
      this.dishes = dishes
    })
    .catch((error)=> {
      console.log(error);
    })
    ;
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
