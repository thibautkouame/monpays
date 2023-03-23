import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Plugins } from '@capacitor/core';
const { Network } = Plugins;

@Component({
  selector: 'app-agnisalution',
  templateUrl: './agnisalution.page.html',
  styleUrls: ['./agnisalution.page.scss'],
})
export class AgnisalutionPage implements OnInit{
  showItem = true;
  cond2 = false;
  showPrononciation=true;
  showDefinition=true;
  ifsound =true;


  constructor(private router : Router) { 
    this.playOneMusicbyTime(); 
  }

  ngOnInit() {
    this.playOneMusicbyTime();
  }

  async onClic(){
    const status = await Network.getSatus();
    console.log(status);
  }

  


  invert(){
    this.showItem = !this.showItem;
    if (this.showItem ==true) {
      console.log("hello");
    }
  }


  retouraumenuPrin(){
    this.router.navigateByUrl('choixethnies');
  }


  check_prononciation(){
    if(this.showPrononciation = true){
      this.showPrononciation = false;
    }
  }

  check_definition(){
    if(this.showDefinition = true){
      this.showDefinition = false;
    }
  }

  refresh_(){
    this.showPrononciation = true;
    this.showDefinition = true;
  }

  playOneMusicbyTime(){
    var players = document.getElementsByTagName('audio');
    Array.from(players).forEach(player => {
      player.addEventListener('play', playHandler)
    });

    function playHandler(e){
      Array.from(players).forEach(player =>{
        if(e.target != player){
          player.pause();
        }
      })
    }

    var a = document.getElementsByTagName('audio');
    console.log(typeof(a));
  }
}
