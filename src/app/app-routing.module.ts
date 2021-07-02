import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {DetailJoueurComponent} from "./detail-joueur/detail-joueur.component";
import {AjoutJoueurComponent} from "./ajout-joueur/ajout-joueur.component";

const routes: Routes = [
  {path:'', component : HomePageComponent},
  {path:'detailsJoueur/:id', component : DetailJoueurComponent},
  {path:'ajoutJoueur', component : AjoutJoueurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
