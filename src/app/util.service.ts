import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private IsMenuEnabled = new Subject<boolean>();

  constructor() { }

  setMenuState(enabled){
    this.IsMenuEnabled.next(enabled)
  }

  getMenuState(): Subject<boolean>{
    return this.IsMenuEnabled;
  }  
}
