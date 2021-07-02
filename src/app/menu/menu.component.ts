import {Component, OnInit} from "@angular/core";
import {JoueursService} from "../services/joueurs.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
nbJoueurs!:number;
isLoading = false;
  constructor(private joueurService: JoueursService) { }

  ngOnInit(): void {
    this.isLoading =true;
this.joueurService.getAll().subscribe(data=>{ this.isLoading = false;
  return this.nbJoueurs = data.length;

})
  }

}
