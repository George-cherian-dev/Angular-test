import { Injectable, Inject } from '@angular/core';
import { Leader } from '../shared/leaderModel';
import { LEADERS } from '../shared/leaderData';
import {of,Observable} from 'rxjs';
import {delay, catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpMessageService } from './process-http-message.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(
    private http:HttpClient, 
    private processHTTPMsgService: ProcessHttpMessageService,
    @Inject('BaseURL') private baseURL
    ) { }
    getLeaders() : Observable<Leader []>{
      return this.http.get<Leader[]>(this.baseURL+'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));;
    }
    getLeader(id:string): Observable<Leader> {

      return this.http.get<Leader>(this.baseURL+'leadership/'+id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
    getFeaturedLeader(): Observable<Leader> {

      return this.http.get<Leader[]>(this.baseURL+'leadership?featured=true')
      .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
      
   
    }
}
