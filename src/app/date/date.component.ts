import { Component, OnInit } from '@angular/core';
import { DateCommuteService } from '../services/datecommute.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  activeIndex:string;
  finalArray:{index:string,dateVal:Date}[][]=[];
  datearray:{index:string,dateVal:Date}[]=[];
  todayDate:Date=new Date();
  selectedItemIndex:string;
  constructor(private dateCommuteService:DateCommuteService) {
    for(var i=1;i<=7;i++){
      this.datearray.push({"index":String(i-1),"dateVal":new Date(this.todayDate)});
      this.todayDate.setDate(this.todayDate.getDate() + 1);
    }
    this.finalArray.push(this.datearray.slice(0,3));
    this.finalArray.push(this.datearray.slice(3,6));
    this.finalArray.push(this.datearray.slice(6,7));
  }
  ngOnInit(): void {
    this.selectedItemIndex="0";
  }
  onDateClick(event,index){
    this.selectedItemIndex = index;
    this.dateCommuteService.setSelectedDate(event.target.attributes["valueobj"]["nodeValue"]);
  }
}
