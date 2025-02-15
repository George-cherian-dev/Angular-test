import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public matdialog:MatDialog) { }

  ngOnInit(): void {
  }
  openLoginForm(){
    this.matdialog.open(LoginComponent,{ width: '30%',height:'70%'});
  }
}
