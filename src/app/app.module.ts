import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute=[
  {
    path:"",
    component:AddstudentComponent
  },
  {
    path:"view",
    component:ViewstudentComponent
  },
  {
    path:"search",
    component:SearchstudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    ViewstudentComponent,
    SearchstudentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
