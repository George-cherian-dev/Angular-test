import { Injectable } from '@angular/core';
import { Leader } from '../shared/leaderModel';
import { LEADERS } from '../shared/leaderData';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

    constructor() { }
    getLeaders() : Promise<Leader []>{
      return Promise.resolve(LEADERS);
    }
    getLeader(id:string): Promise<Leader> {
      return  Promise.resolve(LEADERS.filter((Leader) => {return Leader.id === id})[0]);
    }
    getFeaturedLeader(): Promise<Leader> {
      return  Promise.resolve(LEADERS.filter((Leader) => Leader.featured)[0]);
    }
}
