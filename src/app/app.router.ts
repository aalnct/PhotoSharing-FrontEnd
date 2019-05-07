import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RegisteredComponent} from "./registered/registered.component";

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
