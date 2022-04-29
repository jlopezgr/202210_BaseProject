import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeListComponent } from './cafe/cafe-list/cafe-list.component';

const routes: Routes = [
  { path: '', component: CafeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
