import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotionData';
import { Promotion } from '../shared/promotionModel';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions() : Promise<Promotion[]> {
    return  Promise.resolve(PROMOTIONS);
  }
  getPromotion(id:string): Promise<Promotion> {
    return  Promise.resolve(PROMOTIONS.filter((promotion) => {promotion.id === id})[0]);
  }
  getFeaturedPromotion(): Promise<Promotion> {
    return  Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  }
}
