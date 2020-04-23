import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { AjaxService } from '../services/ajax.service';
import { DatesService } from '../services/date.service';
import { DateCommuteService } from '../services/datecommute.service';
import { Router } from '@angular/router';

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

  constructor(private http:HttpClient,
              private ajaxService:AjaxService,
              private dateService:DatesService,
              private dateCommuteService:DateCommuteService,
              private router: Router) {
        //Empty constructor
  }

  // to get the value from datepicker / datetile
  getSelectedDate:string ;

  ngOnInit(): void {
    //method for fetch movielist
    this.dateCommuteService.selectedDate.subscribe(
      selectedDate => 
      this.fetchMovieList(selectedDate)
      );
  }

  // Method declaration for fetch movie list
  private fetchMovieList(selectedDate){
  // HTTP call for fetch data from firebase JSON
  this.getSelectedDate = selectedDate;
  this.ajaxService.getMethod('https://devitheater-4c18c.firebaseio.com/dates.json').subscribe(
      /* 
        1. On Successful JSON return fetch required index.
        2. daysBetween(this.getSelectedDate) method will return the future date index to fetch the correct list of movie
      */
     dates => {
        let index = this.dateService.getDaysBetween(selectedDate);
        if(index>6){
          this.getSelectedDate = null;
        }else{
          this.moviesList = <{}[]>dates[index].movies;
        }
        
      },
      error => {
        console.log("this is the error from carousel ajax call ->"+error)
      }
    );
  }

   goToBookNow(){
    this.router.navigate(['/book']);
  }

}


