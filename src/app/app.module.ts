import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AF} from "../providers/af";
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import { RegistrationPageComponent } from './registration-page/registration-page.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDXpuKead0KLvnKI0uC0b4CAsMRTTOPPOw",
    authDomain: "crud-ac6d1.firebaseapp.com",
    databaseURL: "https://crud-ac6d1.firebaseio.com",
    projectId: "crud-ac6d1",
    storageBucket: "crud-ac6d1.appspot.com",
    messagingSenderId: "356643997494"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent, RegistrationPageComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF]
})
export class AppModule {}
