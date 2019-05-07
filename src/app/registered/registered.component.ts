import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {RegisteredService} from "../registered.service";

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  newUser: User = new User();
  registered:boolean = false;

  constructor(private registerService : RegisteredService) { }

  onSubmit(){
    console.log("Submit Test")
    this.registerService.sendUser(this.newUser).subscribe(
      data => {
        this.registered = true;
        this.newUser = new User();
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
