import { Component, OnInit } from '@angular/core';
import { DateCommuteService } from '../services/datecommute.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
   
  datearray:Date[]=[];
  todayDate:Date=new Date();
  onSave($event){
    this.dateCommuteService.setSelectedDate($event.target.innerText);

   }
  constructor(private dateCommuteService:DateCommuteService) {

  for(var i=1;i<=7;i++){
  this.datearray.push(new Date(this.todayDate));
  this.todayDate.setDate(this.todayDate.getDate() + 1);
  console.log(this.datearray);
  }

  }

  ngOnInit(): void {
  }

}
