import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  formView:boolean = false;
  constructor() { }
  form = new FormGroup({
  title: new FormControl('',[Validators.required]),
  discription:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }

  viewForm(){
    this.formView=true;
  }
  addPost(f){
    console.log(f);
  }
  close(){
    this.formView=false;
  }

}
