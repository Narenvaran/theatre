import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SampleDateComponent } from './sample-date/sample-date.component';
import { HomeAdCarouselComponent } from './home-ad-carousel/home-ad-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    SampleDateComponent,
    HomeAdCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
