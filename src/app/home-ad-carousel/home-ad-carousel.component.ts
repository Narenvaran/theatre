import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { NgbCarousel,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AjaxService } from '../services/ajax.service';
import { DatesService } from '../services/date.service';
import { DateCommuteService } from '../services/datecommute.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-ad-carousel',
  templateUrl: './home-ad-carousel.component.html',
  styleUrls: ['./home-ad-carousel.component.css']
})
export class HomeAdCarouselComponent implements OnInit {

 @ViewChild('myCarousel', {static: false}) myCarousel: NgbCarousel;
 carouselInput:string[];
 dcSubsptn:Subscription;
  
  constructor(private config: NgbCarouselConfig,
              private ajaxService:AjaxService,
              private dateService:DatesService,
              private dateCommuteService:DateCommuteService) {
    this.config.interval = 5000;
  }

  ngOnInit() {
    this.dcSubsptn = this.dateCommuteService.selectedDate.subscribe(
      selectedDate => 
      this.renderHomeAds(selectedDate)
      );
  }

  ngAfterViewInit(){
    console.log(this.myCarousel);
  }

  private renderHomeAds(selectedDate:string){
    this.ajaxService.getMethod('https://devitheater-4c18c.firebaseio.com/dates.json').subscribe(
      adsData => {
        let index = this.dateService.getDaysBetween(selectedDate);
        this.carouselInput = <string[]>adsData[index].ads;
      },
      error => {
        console.log("this is the error from carousel ajax call ->"+error)
      }
    );
  }

  goToFirstCard(){
    this.myCarousel.select("0");
  }

  ngOnDestroy(){
    this.dcSubsptn.unsubscribe();
  }

}
