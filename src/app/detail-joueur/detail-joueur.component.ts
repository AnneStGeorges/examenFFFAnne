import { Component, OnInit } from '@angular/core';
import {Joueur} from "../class/joueur";
import {JoueursService} from "../services/joueurs.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-joueur.component.html',
  styleUrls: ['./detail-joueur.component.css']
})
export class DetailJoueurComponent implements OnInit {
  isLoading = false;
  id!:number;
joueur!: Joueur;
  constructor(private joueurService : JoueursService, private activatedRoute : ActivatedRoute) {
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.joueurService.getOne(this.id).subscribe(data =>{
this.joueur = data;
this.isLoading = false;
    })
  }

}
