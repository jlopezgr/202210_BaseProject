import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CafeListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CafeListComponent
  ]
})
export class CafeModule { }
