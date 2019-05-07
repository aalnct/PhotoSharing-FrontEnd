import { Injectable } from '@angular/core';
import {User} from "./models/user";
import {Headers, Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegisteredService {

  constructor(private http : Http) { }

  sendUser(user : User){
    let url = "http://localhost:8080/user/register";
    let headers1 = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, JSON.stringify(user) ,  {headers :headers1});
  }



}
