import { Injectable, Inject } from '@angular/core';
import { PROMOTIONS } from '../shared/promotionData';
import { Promotion } from '../shared/promotionModel';
import {of,Observable} from 'rxjs';
import {delay, catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpMessageService } from './process-http-message.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

 
  constructor(
    private http:HttpClient, 
    private processHTTPMsgService: ProcessHttpMessageService,
    @Inject('BaseURL') private baseURL
    ) { }
    
  getPromotions() : Observable<Promotion[]> {
    
    
    return this.http.get<Promotion[]>(this.baseURL+'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError));
    
  }
  getPromotion(id:string): Observable<Promotion> {
    return this.http.get<Promotion>(this.baseURL+'promotions/'+id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
 
  }
  getFeaturedPromotion(): Observable<Promotion> {
    
    return this.http.get<Promotion[]>(this.baseURL+'promotions')
    .pipe(map(leaders => leaders[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
    
  }
}
