import { Injectable } from '@angular/core';
import { Leader } from '../shared/leaderModel';
import { LEADERS } from '../shared/leaderData';
import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

    constructor() { }
    getLeaders() : Observable<Leader []>{
      return of(LEADERS).pipe(delay(1500));
    }
    getLeader(id:string): Observable<Leader> {
      
      return of(LEADERS.filter((Leader) => {return Leader.id === id})[0]).pipe(delay(1500));

    }
    getFeaturedLeader(): Observable<Leader> {
      
      return of(LEADERS.filter((Leader) => Leader.featured)[0]).pipe(delay(1500));
   
    }
}
