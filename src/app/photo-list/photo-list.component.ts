import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../photo.service";
import {Photo} from "../models/photo";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[];
  selectedPhoto: Photo;

  constructor(private photoService : PhotoService) {
    this.photoService.getPhoto().subscribe(
      data => console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
