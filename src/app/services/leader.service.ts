import { Injectable } from '@angular/core';
import { Leader } from '../shared/leaderModel';
import { LEADERS } from '../shared/leaderData';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

    constructor() { }
    getLeaders() : Promise<Leader []>{
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(LEADERS);
        }, 1500);
      });
    }
    getLeader(id:string): Promise<Leader> {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(LEADERS.filter((Leader) => {return Leader.id === id})[0]);
        }, 1500);
      });
    }
    getFeaturedLeader(): Promise<Leader> {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(LEADERS.filter((Leader) => Leader.featured)[0])
        }, 1500);
      });
    }
}
