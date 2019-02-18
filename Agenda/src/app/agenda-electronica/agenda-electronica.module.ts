import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgendaElectronicaPage } from './agenda-electronica.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaElectronicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgendaElectronicaPage]
})
export class AgendaElectronicaPageModule {}
