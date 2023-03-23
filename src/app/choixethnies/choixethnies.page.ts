import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choixethnies',
  templateUrl: './choixethnies.page.html',
  styleUrls: ['./choixethnies.page.scss'],
})
export class ChoixethniesPage implements OnInit {

   jsonData:any=[];

  constructor(private router : Router) { 
    this.initializaJSONData();
  }

  FilterJSONData(ev:any){
    this.initializaJSONData();
    const val = ev.target.value;
    if(val && val.trim() != ''){
      this.jsonData = this.jsonData.filter((item)=>{
        return (item.ethnie.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
  }

  initializaJSONData(){
    this.jsonData = [
      {id : 1, ethnie : 'Abidji' , code : 'A', description : 'Agni ow', motBienvenu : "a venir", music :"../../assets/audios/reveil-7.mp3"},
      {id : 2, ethnie : 'Adjoukrou' , code : 'A', description : 'Agni ow',  motBienvenu : "a venir"},
      {id : 3, ethnie : 'Agni' , code : 'A', description : 'Agni ow', motBienvenu : "Akwaba", lienSalut : "/agnisalution"},
      {id : 4, ethnie : 'Attié' , code : 'A', description : 'Agni ow', motBienvenu : "a venir"},
      {id : 5, ethnie : 'Baoulé' , code : 'B', description : 'Baba mo', motBienvenu : "Mo Mo"},
      {id : 6, ethnie : 'Bété' , code : 'A', description : 'Agni ow', motBienvenu : "a venir"},
      {id : 7, ethnie : 'Dida' , code : 'D', description : 'Agni ow', motBienvenu : "a venir"},
      {id : 8, ethnie : 'Ebrié' , code : 'E',description : 'Agni ow', motBienvenu : "a venir"},
      {id : 9, ethnie : 'Gouro' , code : 'A',description : 'Agni ow', motBienvenu : "a venir"},
      {id : 10, ethnie : 'Lobi' , code : 'L', description : 'Agni ow', motBienvenu : "a venir"},
      {id : 11, ethnie : 'Malinké' , code : 'M', description : 'Agni ow', motBienvenu : "a venir"},
      {id : 12, ethnie : 'Senoufo' , code : 'S',description : 'Agni ow', motBienvenu : "a venir"},
      {id : 13, ethnie : 'Toura' , code : 'T', description : 'Agni ow', motBienvenu : "a venir"},
      {id : 14, ethnie : 'Wobé' , code : 'W', description : 'Agni ow', motBienvenu : "a venir"},
      {id : 15, ethnie : 'Yacouba' , code : 'Y', description : 'Baa abao', motBienvenu : "Kwayomou"},
    ]
  }

  ngOnInit() {
  }

  selectVal(val){
    alert("selct :" + val)
  }

  optionsCours(choixitem){
    this.router.navigate(['/optionscours'],{
      queryParams: choixitem,
    } )
  }

}
