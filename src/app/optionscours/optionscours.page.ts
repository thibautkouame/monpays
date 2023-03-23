import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-optionscours',
  templateUrl: './optionscours.page.html',
  styleUrls: ['./optionscours.page.scss'],
})
export class OptionscoursPage implements OnInit {

  courActif : any = {}; 
  coursSelection;

  constructor(private router : Router, private rout : ActivatedRoute) { 
    // this.coursSelection = this.rout.snapshot.paramMap.get('id');
    this.rout.queryParams.subscribe(res => {
      this.courActif = res;
    })
  }

  ngOnInit() {
  }

  open(){
    this.router.navigateByUrl('cours').then(()=>{
      this.rout.queryParams.subscribe(res => {
        console.log(res);
      })
    }) 
  }

  retouraumenuPrin(){
    this.router.navigateByUrl('choixethnies');
  }

  go(){
    this.router.navigateByUrl('choixethnies')
  }
}
