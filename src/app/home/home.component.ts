import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotionModel';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leaderModel';
import { expand } from '../../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
      animations: [
        expand()
      ]
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  errMessLeader:string;
  errMessDish: string;
  errMessPromotion: string;

  constructor(
    private dishService:DishService, 
    private promotionService:PromotionService,
    private leaderService:LeaderService,
    @Inject('environment') public environment
    ) {

     }

  ngOnInit(): void {
     this.dishService.getFeaturedDish()
     .subscribe((dish) =>{
      this.dish = dish
    },(error) => {

      this.errMessDish = <any>error;
    });
    this.promotionService.getFeaturedPromotion()
    .subscribe((promotion) =>{
     this.promotion = promotion
   },(error) => {

    this.errMessPromotion = <any>error;
   });
    this.leaderService.getFeaturedLeader()
    .subscribe((leader) =>{
     this.leader = leader
   },(error) => {

    this.errMessLeader = <any>error;
   });
  }

}
