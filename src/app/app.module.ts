

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishItemComponent } from './menu/dish-item/dish-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';

import 'hammerjs';
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';
import { PromotionService } from './services/promotion.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishItemComponent,
    DishItemComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  providers: [
    DishService,
    LeaderService,
    PromotionService
  ],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
