import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PhotoService {

  constructor(private http:HttpClient) { }

  getPhoto(){
  let url = "http://localhost:8080/photo/allPhotos";
    return this.http.get(url);
  }

}
