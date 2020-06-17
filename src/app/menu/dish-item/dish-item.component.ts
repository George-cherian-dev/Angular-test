import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Dish } from '../../shared/dish';
import { DishService } from '../../services/dish.service'
 
@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent implements OnInit {

  selectedDish: Dish ;

  constructor(
    private dishService:DishService,
    private Route: ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit(): void {
    let id = this.Route.snapshot.params['id'];
    this.dishService.getDish(id)
    .then((dish) => {
      this.selectedDish = dish
    })
    .catch((error)=> {
      console.log(error);
    })
    ;
  }

  goBack(){
    this.location.back();
  }

}
