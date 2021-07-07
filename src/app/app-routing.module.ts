import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateQrComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
