import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookNowScreenComponent } from './book-now-screen/book-now-screen.component';
import { AppHomeComponent } from './app-home/app-home.component';


const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'book',component: BookNowScreenComponent},
  { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
