
import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { DishItemComponent } from './menu/dish-item/dish-item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    {path:'contactUs', component: ContactComponent},
    { path: 'menu',     component: MenuComponent },
    {path:'aboutUs', component: AboutComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];