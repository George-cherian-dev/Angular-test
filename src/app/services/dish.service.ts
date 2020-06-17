import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishData';
import {of,Observable} from 'rxjs';
import {delay, map, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment';
import { ProcessHttpMessageService } from './process-http-message.service';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(
    private http:HttpClient, 
    private processHTTPMsgService: ProcessHttpMessageService
    ) { }
  getDishes() : Observable<Dish []>{
    
    return this.http.get<Dish[]>(environment.baseUrl+'dishes')
    .pipe(catchError(this.processHTTPMsgService.handleError));;
  }
  getDish(id:string): Observable<Dish> {
    
    return this.http.get<Dish>(environment.baseUrl+'dishes/'+id)
    .pipe(catchError(this.processHTTPMsgService.handleError));;

  }
  getFeaturedDish(): Observable<Dish> {
    
    return this.http.get<Dish[]>(environment.baseUrl+'dishes?featured=true')
    .pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getDishIds(): Observable<string []>{
    return this.http.get<Dish[]>(environment.baseUrl+'dishes').
    pipe(map(dishes => 
      dishes.map(dish => dish.id))
      )
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  putDish(dish:Dish): Observable<Dish>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };

    return this.http.put<Dish>(environment.baseUrl+'dishes/'+dish.id,dish,httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
