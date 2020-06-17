import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotionData';
import { Promotion } from '../shared/promotionModel';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions() : Promise<Promotion[]> {
    
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(PROMOTIONS);
      }, 1500);
    });
  }
  getPromotion(id:string): Promise<Promotion> {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(PROMOTIONS.filter((promotion) => {promotion.id === id})[0]);
      }, 1500);
    });
  }
  getFeaturedPromotion(): Promise<Promotion> {
    
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
      }, 1500);
    });
  }
}
