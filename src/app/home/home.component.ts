import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotionModel';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leaderModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;

  constructor(
    private dishService:DishService, 
    private promotionService:PromotionService,
    private leaderService:LeaderService,
    ) {

     }

  ngOnInit(): void {
     this.dishService.getFeaturedDish()
     .subscribe((dish) =>{
      this.dish = dish
    },(error) => {

    });
    this.promotionService.getFeaturedPromotion()
    .subscribe((promotion) =>{
     this.promotion = promotion
   },(error) => {

   });
    this.leaderService.getFeaturedLeader()
    .subscribe((leader) =>{
     this.leader = leader
   },(error) => {

   });
  }

}
