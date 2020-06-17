import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Dish } from '../../shared/dish';
import { DishService } from '../../services/dish.service'
import { switchMap } from 'rxjs/operators';
 
@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent implements OnInit {

  selectedDish: Dish ;
  dishIds: string [];
  prev: number;
  next:number;

  constructor(
    private dishService:DishService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit(): void {

    this.dishService.getDishIds().subscribe(dishIds =>{
      this.dishIds = dishIds
      console.log(dishIds);
    });

    /*this.route.params
    .pipe(switchMap( 
      (params: Params) =>   this.dishService.getDish(params['id'])
      ))
    .subscribe((dish) => {
      this.selectedDish = dish;
      console.log(dish);
      this.setPrevNext(dish);
    },(error)=> {
      console.log(error);
    });;*/

      this.route.params.subscribe( (params: Params) => {
        this.selectedDish = null;
        this.dishService.getDish(params['id'])
        .subscribe((dish) => {
          this.selectedDish = dish;
          this.setPrevNext(dish);
        },(error)=> {
          console.log(error);
        });
      }
      );
  }
  setPrevNext(dish:Dish){
    let index = this.dishIds.indexOf(dish.id);
    this.prev = (this.dishIds.length + index - 1)% this.dishIds.length;
    this.next = (index + 1)% this.dishIds.length;
  }
  goBack(){
    this.location.back();
  }

}
