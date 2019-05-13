import { Component, OnInit } from '@angular/core';
import {UploadPhotoService} from "../upload-photo.service";
import {AddPhotoService} from "../add-photo.service";
import {Photo} from "../models/photo";
import {User} from "../models/user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  newPhoto : Photo = new Photo();
  photoAdded : boolean = false;
  user : User;

  constructor(private uploadPhotoService:UploadPhotoService,
    private addPhotoService : AddPhotoService, private userService : UserService) { }

    onSubmit(){
      this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
        user => {
          this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
          console.log(this.user);
          this.newPhoto.user = this.user;
          this.addPhotoService.sendPhoto(this.newPhoto).subscribe(
            data => {
              this.photoAdded = true;
              this.newPhoto = new Photo();
            },
              error => console.log(error)
          );
        },
          error => console.log(error)
      )
    }

  ngOnInit() {
  }

}
