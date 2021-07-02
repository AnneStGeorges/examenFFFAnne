import { Component, OnInit } from '@angular/core';
import {Joueur} from "../class/joueur";
import {JoueursService} from "../services/joueurs.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
isLoading = false;
joueurs?: Joueur[];

  constructor(private joueurService : JoueursService) { }

  delete(id:number){
this.isLoading =true;
this.joueurService.delete(id).subscribe(data =>{
  this.ngOnInit();
})
  }
  ngOnInit(): void {

    this.isLoading = true;
this.joueurService.getAll().subscribe(data=>{
  this.joueurs = data;
  this.isLoading = false;
})
  }

}
