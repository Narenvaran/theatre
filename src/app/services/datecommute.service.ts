
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatesService } from './date.service';

@Injectable({ providedIn: 'root' })
export class DateCommuteService {
private subject = new BehaviorSubject(this.datesService.getTodaysDate());
selectedDate = this.subject.asObservable();

 constructor(private datesService:DatesService) {
     //empty constructor
 }

 setSelectedDate(sltdDate:string){
   this.subject.next(sltdDate);
 }
}