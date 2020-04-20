import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  //var for store movies on a particular day
  moviesList:{}[];
 
  //value will be stored after computing the day index (userdate - today)
  fetchThisRecord = 0;

  // to get the value from datepicker / datetile
  getSelectedDate = "24-04-2020";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    //method for fetch movielist
    this.fetchMovieList();
  }
  
/* function for find diff between 2 dates */

private daysBetween(selectedDate) {
  if (selectedDate != null) {
    let splitDate = selectedDate.split("-");
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

    // Convert back to days and return
    return Math.round(difference_ms / one_day);
  }
};

  // Method declaration for fetch movie list
  private fetchMovieList(){
    // HTTP call for fetch data from firebase JSON
    this.http.get('https://devitheater-4c18c.firebaseio.com/dates.json').subscribe(dates => { 
    /* 
    1. On Successful JSON return fetch required index.
    2. daysBetween(this.getSelectedDate) method will return the future date index to fetch the correct list of movie
    */
    this.moviesList = <{}[]>dates[this.daysBetween(this.getSelectedDate)].movies;
  });


  }

}


