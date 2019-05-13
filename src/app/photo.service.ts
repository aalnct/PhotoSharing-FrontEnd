import { Injectable } from '@angular/core';
import {User} from "./models/user";
import {Headers, Http} from "@angular/http";

import {Observable} from 'rxjs/Observable';

@Injectable()
export class PhotoService {

  constructor(private http:Http) { }

  getPhoto(){
  let url = "http://localhost:8080/photo/allPhotos";
    return this.http.get(url);
  }

  getPhotosByUser(user:User){
    let tokenUrl = "http://localhost:8080/rest/photo/user";
    let headers1 = new Headers({'Content-Type' : 'application/json' ,  'Authorization' : 'Bearer ' +localStorage.getItem('token')});
    return this.http.post(tokenUrl,JSON.stringify(user), {headers:headers1});
  }

}
