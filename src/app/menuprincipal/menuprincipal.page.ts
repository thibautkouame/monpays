import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
})
export class MenuprincipalPage implements OnInit {
  liens : any[];

  constructor(public router : Router) { 
    this.liens = [
      {nom : 'kouame' , rand : this.rdm()},
      {nom : 'bosson' , rand : this.rdm()},
      {nom : 'badou', site: '../home', rand : this.rdm()},
      {nom : 'thibaut', site : '../menu-acc', rand : this.rdm()},
    ]
  }

   months = ["jan", "fev", "mars", "april", "may", "june", "july"];

   rdm(){
     const dm = Math.floor(Math.random() * this.months.length);
     const show = this.months[dm];
     return show;
   }


  ngOnInit() {
    /*console.log("ff")
    alert(this.rdm())*/
  }

  onClick(){
    console.log("menu a ete clicqe")
  }

}
