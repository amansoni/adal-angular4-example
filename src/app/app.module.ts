import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [
    Adal4Service,
    {
      provide: Adal4HTTPService,
      useFactory: Adal4HTTPService.factory,
      deps: [Http, Adal4Service]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

