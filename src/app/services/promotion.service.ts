import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotionData';
import { Promotion } from '../shared/promotionModel';
import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions() : Observable<Promotion[]> {
    
    return of(PROMOTIONS).pipe(delay(1500));
      
   
  }
  getPromotion(id:string): Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion) => {promotion.id === id})[0]).pipe(delay(1500));
 
  }
  getFeaturedPromotion(): Observable<Promotion> {
    
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(1500));
    
  }
}
