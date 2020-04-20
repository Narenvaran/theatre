import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DateCommuteService } from '../services/datecommute.service';

@Component({
  selector: 'app-sample-date',
  templateUrl: './sample-date.component.html',
  styleUrls: ['./sample-date.component.css']
})
export class SampleDateComponent implements OnInit {

  @ViewChild('requiredDate', {static: true}) requiredDateRef: ElementRef;

  constructor(private dateCommuteService:DateCommuteService) { }

  ngOnInit(): void {
  }

  getMovies(){
      this.dateCommuteService.setSelectedDate(this.requiredDateRef.nativeElement.value);
  }
}
