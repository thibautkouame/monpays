import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OptionscoursPageModule } from '../optionscours/optionscours.module';
import { OptionscoursPage } from '../optionscours/optionscours.page';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
})
export class CoursPage implements OnInit {

  courActif : any = {}; 
  constructor(private router : Router, private rout : ActivatedRoute) { 
    this.rout.queryParams.subscribe(res => {
      this.courActif = res;
    })
  }

  ngOnInit() {
   
  }

}
