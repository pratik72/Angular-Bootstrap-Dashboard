import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms/forms.component';
import { ModalsComponent } from './modals/modals.component';
import { TablesComponent } from './tables/tables.component';
import { CardsComponent } from './cards/cards.component';
import { DashHomeComponent } from './dash-home/dash-home.component';

let routes: Routes = [
    { path: '' , component : DashHomeComponent },
    { path: 'forms' , component : FormsComponent },
    { path: 'modals' , component : ModalsComponent },
    { path: 'tables' , component : TablesComponent },
    { path: 'cards' , component : CardsComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}