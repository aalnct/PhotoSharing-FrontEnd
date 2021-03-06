import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "./models/user";

@Injectable()
export class UserService {

  users : User[];

  constructor(private http:Http) { }

  getUsers(){

  }

  getUserById(id: string){

  }

  getUserByName(username : string){
    let tokenURL = "http://localhost:8080/rest/user/userName";
    let headers = new Headers({'Content-Type' : 'application/json' ,  'Authorization' : 'Bearer ' + localStorage.getItem("token")});
    return this.http.post(tokenURL,username,{headers : headers});
  }

  updateUser(user : User){
    let tokenUrl = "http://localhost:8080/rest/user/update";
    let headers1 = new Headers({'Content-Type' : 'application.json' ,  'Authorization' : 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(tokenUrl, JSON.stringify(user), {headers: headers1});
  }

}
