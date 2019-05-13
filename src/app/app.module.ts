import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';
import {routing} from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import {PhotoService} from './photo.service';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisteredComponent } from './registered/registered.component';
import {RegisteredService} from "./registered.service";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login.service";
import { MyAlbumComponent } from './my-album/my-album.component';
import {UserService} from "./user.service";
import { AddPhotoComponent } from './add-photo/add-photo.component';
import {AddPhotoService} from "./add-photo.service";
import {UploadPhotoService} from "./upload-photo.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent,
    RegisteredComponent,
    LoginComponent,
    MyAlbumComponent,
    AddPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [
    PhotoService,
    RegisteredService,
    LoginService,
    UserService,
    AddPhotoService,
    UploadPhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
