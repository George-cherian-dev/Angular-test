import { Component, OnInit,Input } from '@angular/core';
import { Dish } from '../../shared/dish';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent implements OnInit {

  @Input() 
  selectedDish: Dish ;

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedDish.comments)
  }

}
