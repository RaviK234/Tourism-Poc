import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule, MatButtonModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MptourismComponent } from './mptourism/mptourism.component';
import { RajasthantourismComponent } from './rajasthantourism/rajasthantourism.component';
import { KeralatourismComponent } from './keralatourism/keralatourism.component';
import { GujarattourismComponent } from './gujarattourism/gujarattourism.component';
import { UttarakhandtourismComponent } from './uttarakhandtourism/uttarakhandtourism.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MptourismComponent,
    RajasthantourismComponent,
    KeralatourismComponent,
    GujarattourismComponent,
    UttarakhandtourismComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
