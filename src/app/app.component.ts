import { Component, OnInit} from '@angular/core';
import { UtilService } from './util.service';
import { menuController } from '@ionic/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  listeMenu : any[];
  public isMenuEnabled:boolean=true;

  constructor(
    private util : UtilService, 
    private platform : Platform,
    private router : Router, 
    ){
    this.listeMenu = [{}];
    // this.initializeApp();
  }

  close(){
    menuController.toggle();
  }
  
  ngOnInit() {
    this.util.getMenuState().subscribe(menuState=>{
      this.isMenuEnabled = menuState;
    });
  }

  quitter(){
    console.log('L application est quitter')
   this.router.navigateByUrl('parametre');
  }

  // initializeApp() {
  //   // this.HideSplash();
  //   //  this.platform.ready().then(() => {
  //   //   this.HideSplash().then(() => {console.log('effectué')});
  //   //   console.log('tibaut')
  //   // });
  // }

  // async HideSplash() {
  //   await SplashScreen.hide();
  // }  
}
