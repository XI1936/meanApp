import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  BASE_URL='https://floating-caverns-53387.herokuapp.com/api';
  
  constructor(private http : HttpClient) { }
  
  showPost(){
    return   this.http.get(this.BASE_URL+'/post/count?limit=10'); 
  }

  addPost(data){
    return this.http.post<any>(this.BASE_URL+'/post', data);
  }

  deletPost(id){
    return  this.http.delete<any>(this.BASE_URL+'/delete/'+ id);
  }
}
