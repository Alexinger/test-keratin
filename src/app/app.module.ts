
import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboveComponent } from './above/above.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MDBBootstrapModule.forRoot(),
        MDBBootstrapModulePro.forRoot(),
        AppRoutingModule
     ],
    declarations: [
      AppComponent,
      AboveComponent,
      PortfolioComponent,
      PostComponent
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
