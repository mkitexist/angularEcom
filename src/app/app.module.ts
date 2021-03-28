import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavpageComponent } from './navpage/navpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavpageComponent,
    HomePageComponent,
    ListingPageComponent,
    LandingPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
