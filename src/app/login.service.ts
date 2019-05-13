import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http : Http) { }

  sendCredentials(model){
    let tokenUrl = "http://localhost:8080/user/login";
    let headers1 = new Headers({'Content-Type' : 'application/json'});
    return this.http.post(tokenUrl, JSON.stringify(model),{headers : headers1});
  }

  sendToken(token){
    let tokenUrl2 = "http://localhost:8080/rest/user/users";
    console.log('Bearer'+token);

    let getHeaders = new Headers({'Authorization' : 'Bearer '+token});
    return this.http.get(tokenUrl2,{headers : getHeaders});
  }

  logout(){
    localStorage.setItem("token","");
    localStorage.setItem("currentUserName","");
    alert('You Just Logged out');
  }

  checkLogin(){
    if(localStorage.getItem("currentUserName")!=null && localStorage.getItem("currentUserName")!=''
          && localStorage.getItem("token")!=null && localStorage.getItem("token")!=''){
      return true;
    }else{
      return false;
    }
  }

}


