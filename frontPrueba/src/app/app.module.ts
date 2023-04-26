import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  //esto se debe agregar 
import { CreateUserComponent } from './vistas/ingresos/pages/create-user/create-user.component';
import { EditUserComponent } from './vistas/ingresos/pages/edit-user/edit-user.component';
import { LoginModule } from './vistas/login/login.module';
import {HttpClientModule} from '@angular/common/http';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, //aca también
    LoginModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
