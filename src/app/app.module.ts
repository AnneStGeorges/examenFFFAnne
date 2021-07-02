import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AjoutJoueurComponent } from './ajout-joueur/ajout-joueur.component';
import { DetailJoueurComponent } from './detail-joueur/detail-joueur.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    AjoutJoueurComponent,
    DetailJoueurComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
