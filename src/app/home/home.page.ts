import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
import { MenuprincipalPage } from '../menuprincipal/menuprincipal.page';
import { UtilService } from '../util.service';

declare var External;
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
    private util : UtilService,
    ) {   
    this.liens = [
      {nom : 'kouame'},
      {nom : 'thibaut'},
      {nom : 'badou'},
    ],
    setTimeout(()=>{
      this.router.navigateByUrl('menuprincipal');
    },4900);
  }

  next(){
    this.slides.slideNext();
  }

  skip(){
    this.slides.slideTo(3);
  }

  getStarted(){
    this.util.setMenuState(true);
    this.navControl.navigateRoot('menuprincipal',{animationDirection : 'forward'});
  }

}
