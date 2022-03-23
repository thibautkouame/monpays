import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  comp = true;
  liens : any[];

  


  constructor(private router : Router,
     private alertController : AlertController, 
     private toastController : ToastController) { 
    this.liens = [
      {id : 1, backgroundColor: "#91d24" , gpEthnique : 'Agni' , rand : this.randomGroupeEthnique(), topNumber : 12,},
      {id : 2, backgroundColor: "#911e70" , gpEthnique : 'Yacouba' , rand : this.randomGroupeEthnique(), topNumber : 3, color: "yellow" },
      {id : 3, backgroundColor: "#918d20" , gpEthnique : 'Senoufo', site: '../home', rand : this.randomGroupeEthnique() , topNumber : 4, color: "green" },
      {id : 4, backgroundColor: "#111d90" , gpEthnique : 'Malinké', site : '../menu-acc', rand : this.randomGroupeEthnique(), topNumber : 1, color: "purple" },
    ];
     this.randomGroupeEthnique();
  }



  GroupeEthnique = ["Agni : Originaire du Ghana ce peuple est divisé en 4 grand grooupe.", 
                    "En Baoulé, Merci se dit : Moo." ,
                    "Les Akans sont composé des baoulés"
                  ];

  randomGroupeEthnique(){
     const RandomGroupeEthnique = Math.floor(Math.random() * this.GroupeEthnique.length);
     const show = this.GroupeEthnique[RandomGroupeEthnique];
     return show;
   }

  ngOnInit() {
    console.log('hello');
  }
  
   async rdmCultreGen() {
     const alert = await this.alertController.create({
       header: 'Le Saviez-vous ?',
       message: this.randomGroupeEthnique(),
       buttons: [
         {
           text: 'Ok',
           handler: () => {
             console.log('Confirm Okay');
           }
          
         }
       ],
       cssClass: "rdmCultreGenCss",
     });
   
     await alert.present();
   }

  startLearn(){
    this.router.navigateByUrl('menu-acc')
  }

}
