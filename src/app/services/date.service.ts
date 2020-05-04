import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DatesService {
 constructor() {
     //empty constructor
 }
  /* function for find diff between 2 dates */

 getDaysBetween(endDate) {
    if (endDate != null) {
      let splitDate = endDate.split("-");
      let userDate = parseInt(splitDate[0]);
      let userMont = parseInt(splitDate[1]) - 1;
      let userYear = parseInt(splitDate[2]);
      var DateObj = new Date(userYear, userMont, userDate);
      var userDateIs = new Date(
        DateObj.getFullYear(),
        DateObj.getMonth(),
        DateObj.getDate()
      );
      //this.daysBetweenI(userDateIs);
      //Get 1 day in milliseconds
      var one_day = 1000 * 60 * 60 * 24;
      var date2 = new Date();
      // Convert both dates to milliseconds
      var date1_ms = userDateIs.getTime();
      var date2_ms = date2.getTime();
  
      // Calculate the difference in milliseconds
      var difference_ms = date1_ms - date2_ms;
      let result = Math.ceil(difference_ms / one_day)
  
      // Convert back to days and return
      return result === -1? 0:result;
    }
  }

  getNextSevenDays() { 
    let datearray:Date[]=[];
    let todayDate:Date=new Date();
    for(var i=1;i<7;i++){ 
      datearray.push(new Date(todayDate));
      todayDate.setDate(todayDate.getDate() + 1);
    }
    return datearray;
 }

   getTodaysDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return dd + '-' + mm + '-' + yyyy;
   }
}