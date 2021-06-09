import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UI';
  PostData;
  constructor(private http : HttpClient){

  }
  ngOnInit(){
  
  }

  showPost(){
    this.http.get('http://localhost:3000/post').subscribe((data)=>{
      console.warn(data);
      this.PostData=data;
  });
  }
}
