import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MptourismComponent } from './mptourism/mptourism.component';
import { RajasthantourismComponent } from './rajasthantourism/rajasthantourism.component';
import { GujarattourismComponent } from './gujarattourism/gujarattourism.component';
import { KeralatourismComponent } from './keralatourism/keralatourism.component';
import { UttarakhandtourismComponent } from './uttarakhandtourism/uttarakhandtourism.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'mp', component: MptourismComponent },
  { path: 'rajasthan', component: RajasthantourismComponent },
  { path: 'gujarat', component: GujarattourismComponent },
  { path: 'kerala', component: KeralatourismComponent },
  { path: 'uttarakhand', component: UttarakhandtourismComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
