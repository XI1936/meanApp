import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  constructor(private http : HttpClient) { }
  
  showPost(){
    return   this.http.get('https://floating-caverns-53387.herokuapp.com/post'); 
  }
}
