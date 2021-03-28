import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"men",component:ListingPageComponent},
  {path:"men/landing/:id",component:LandingPageComponent},
  {path:"cart/:id/:size",component:CartPageComponent},
  {path:"cart",component:CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
