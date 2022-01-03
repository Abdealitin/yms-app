import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CoreModule } from './core/core.module';
import { LoginService } from './login.service';
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import {environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestore,
    AngularFireDatabaseModule
  ],
  providers: [LoginService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
