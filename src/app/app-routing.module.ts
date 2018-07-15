import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboveComponent } from './above/above.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  {
    path: 'above', component: AboveComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'post', component: PostComponent
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
