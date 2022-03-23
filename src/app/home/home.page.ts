import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
import { MenuprincipalPage } from '../menuprincipal/menuprincipal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonSlides) slides: IonSlides;

  liens : any[];


  constructor(
    private router : Router,
    private navControl : NavController,
    ) { 
    this.liens = [
      {nom : 'kouame'},
      {nom : 'thibaut'},
      {nom : 'badou'},
    ]
  }

  next(){
    this.slides.slideNext();
  }

  skip(){
    this.slides.slideTo(3);
  }

  getStarted(){
    this.navControl.navigateRoot('menuprincipal');
    
  }
}
