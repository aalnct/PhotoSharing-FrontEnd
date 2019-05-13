import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RegisteredComponent} from "./registered/registered.component";
import {LoginComponent} from "./login/login.component";
import {MyAlbumComponent} from "./my-album/my-album.component";
import {AddPhotoComponent} from "./add-photo/add-photo.component";

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisteredComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'my-album',
    component: MyAlbumComponent
  },
  {
    path:'add-photo',
    component: AddPhotoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
