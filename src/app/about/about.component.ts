import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leaderModel'
import { flyInOut,expand } from '../../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[]; 
  errMsg:string;

  constructor(
    private leaderService:LeaderService,
    @Inject('BaseURL') public baseURL
  ) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
    .subscribe((leaders) =>{
     this.leaders = leaders
   },(error) => {

    this.errMsg = <any>error;
   });
  }

}
