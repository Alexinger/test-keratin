import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboveComponent } from './above/above.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostComponent } from './post/post.component';

@NgModule({
   declarations: [
      AppComponent,
      AboveComponent,
      PortfolioComponent,
      PostComponent
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
