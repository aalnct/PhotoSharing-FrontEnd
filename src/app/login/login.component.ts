import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private model = {'username':'', 'password' : ''};
  private currentUserName;


  constructor(private loginService:LoginService) {
    this.currentUserName = localStorage.getItem("currentUserName");
  }

  onSubmit(){
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
        localStorage.setItem("token",JSON.parse(JSON.stringify(data))._body);
        this.loginService.sendToken(localStorage.getItem("token")).subscribe(
          data => {
            this.currentUserName = this.model.username;
            localStorage.setItem("currentUserName",this.model.username);
            this.model.username = '';
            this.model.password = '';
          },
          error => console.log(error)
        );
      }
    )
  }

  ngOnInit() {
  }

}
