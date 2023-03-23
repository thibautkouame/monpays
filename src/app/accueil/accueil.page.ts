import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, NavController, Platform, ToastController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

var name:string = "John"; 
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
     this.alertConnexion() ;
  }



  GroupeEthnique = ["Agni : Agni Agni Agni.", 
                    "En Baoulé, Merci se dit : Moo." ,
                    "Les Akans sont composé des baoulés"
                  ];

  randomGroupeEthnique(){
     const RandomGroupeEthnique = Math.floor(Math.random() * this.GroupeEthnique.length);
     const show = this.GroupeEthnique[RandomGroupeEthnique];
     return show;
   }

  ngOnInit() {
    console.log(name);
   
  }
  
   async rdmCultreGen() {
     const alert = await this.alertController.create({
       header: 'Le saviez-vous ?',
       message: this.randomGroupeEthnique(),
       buttons: [
         {
           text: 'Ok',
           handler: () => {
             console.log('Confirm Okay');
           },
           cssClass : "btnClass",
         }
       ],
       cssClass: "rdmCultreGenCss",
       
     });
   
     await alert.present();
   }

   async alertConnexion() {
    const alert = await this.alertController.create({
      header: 'Notification',
      message: "Activé votre connexion internet 30s pour le téléchargement des méta donnéees",
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          },
          cssClass : "btnClass",
        }
      ],
      cssClass: "rdmCultreGenCss",
      
    });
  
    await alert.present();
  }

  startLearn(){
    this.router.navigateByUrl('choixethnies')
  }

}
