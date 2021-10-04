import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlebarComponent } from './MyComponents/titlebar/titlebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './MyComponents/display/display.component';
import { AngularFireDatabase } from '@angular/fire/compat/database';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {environment} from  '../environments/environment';

const config={
  apiKey: "AIzaSyDfalwYGOaiC7Sy7DwCQgfZQLWfl6HIsnc",
  authDomain: "bingesuggestions-b88b2.firebaseapp.com",
  projectId: "bingesuggestions-b88b2",
  storageBucket: "bingesuggestions-b88b2.appspot.com",
  messagingSenderId: "347818223309",
  appId: "1:347818223309:web:b97bd25908464267136b84",
  measurementId: "G-J8ELGK3SYH"
};



@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
