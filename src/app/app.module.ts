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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent,
    RegisteredComponent
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
    RegisteredService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
