import { Component, OnInit } from '@angular/core';
import {Joueur} from "../class/joueur";
import {JoueursService} from "../services/joueurs.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styleUrls: ['./ajout-joueur.component.css']
})
export class AjoutJoueurComponent implements OnInit {
  isLoading = false;
joueur = new Joueur();

  constructor(private joueurService: JoueursService, private router: Router, private notifier: ToastrService) { }

  ngOnInit(): void {
  }
onSubmit() {
    this.isLoading = true;

    this.joueurService.add(this.joueur).subscribe(data=>{
      this.router.navigate(['']);
      this.notifier.success(this.joueur.prenom +' ' + this.joueur.nom + ' a bien été ajouté !');
    })

}
}
