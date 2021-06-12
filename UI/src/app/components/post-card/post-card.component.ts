import { AppService } from 'src/app/service/app.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input("cardData") cardData;
  
  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  deletPost(id){
    this.appService.deletPost(id).subscribe(a=>{
      alert("deleted");
    })
    console.warn(id);
  }

}
