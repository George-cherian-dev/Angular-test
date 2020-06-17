import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotionData';
import { Promotion } from '../shared/promotionModel';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions() : Promotion[] {
    return PROMOTIONS;
  }
  getPromotion(id:string): Promotion {
    return PROMOTIONS.filter((promotion) => {promotion.id === id})[0];
  }
  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }
}
