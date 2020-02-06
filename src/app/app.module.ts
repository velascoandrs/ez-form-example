import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EzFormModule} from '@gordon_freeman/ez-form';
import {MatNativeDateModule} from '@angular/material';
import {PlosService} from './plos.service';
import {ToastModule} from 'primeng';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EzFormModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [
    MatNativeDateModule,
    PlosService,
    ToastModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
