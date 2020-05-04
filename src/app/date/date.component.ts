import { Component, OnInit, ViewChild } from '@angular/core';
import { DateCommuteService } from '../services/datecommute.service';
import { Subscription } from 'rxjs';
import { DatesService } from '../services/date.service';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @ViewChild('dateCarousel', {static: false}) dteCarousel: NgbCarousel;
  activeIndex:string;
  finalArray:{index:string,dateVal:Date}[][]=[];
  datearray:{index:string,dateVal:Date}[]=[];
  todayDate:Date=new Date();
  selectedItemIndex:string;
  dcSubsptn:Subscription;
  currentDateIndex:string;
  constructor(private dateCommuteService:DateCommuteService,
              private dateService:DatesService,
              private config: NgbCarouselConfig) {
    for(var i=1;i<=7;i++){
      this.datearray.push({"index":String(i-1),"dateVal":new Date(this.todayDate)});
      this.todayDate.setDate(this.todayDate.getDate() + 1);
    }
    this.finalArray.push(this.datearray.slice(0,3));
    this.finalArray.push(this.datearray.slice(3,6));
    this.finalArray.push(this.datearray.slice(6,7));
  }
  ngOnInit(): void {
    this.dcSubsptn = this.dateCommuteService.selectedDate.subscribe(
      selectedDate => 
      this.resolveSelectedItem(selectedDate)
      );
  }

  ngAfterViewInit(){
    this.dteCarousel.select(this.currentDateIndex);
  }

  onDateClick(event,index){
    this.selectedItemIndex = index;
    this.dateCommuteService.setSelectedDate(event.target.attributes["valueobj"]["nodeValue"]);
  }
  
  resolveSelectedItem(selectedDate:string){
    let reqIndex = this.dateService.getDaysBetween(selectedDate);
    let dividend = reqIndex+1;
    this.selectedItemIndex = String(reqIndex);
    this.currentDateIndex = String((Math.ceil(dividend/3))-1);
  }
}
