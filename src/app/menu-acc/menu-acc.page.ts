import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-acc',
  templateUrl: './menu-acc.page.html',
  styleUrls: ['./menu-acc.page.scss'],
})
export class MenuAccPage implements OnInit {

  Notifications : any[];
  constructor() { 
    this.Notifications = [
      {nomEtnie : 'Agnie', textMontrer : 'Bonjour' , SeDit : 'Agni o' },
      {nomEtnie : 'Yacouba', textMontrer : 'Alloco' , SeDit : 'Loco' },
      {nomEtnie : 'Baoulé', textMontrer : 'Riz' , SeDit : 'Avié' },
      {nomEtnie : 'Agnie', textMontrer : 'Vien' , SeDit : 'Bla' },
    ]
  }

  ngOnInit() {
  }

}
