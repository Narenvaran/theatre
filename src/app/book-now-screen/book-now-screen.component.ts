import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-now-screen',
  templateUrl: './book-now-screen.component.html',
  styleUrls: ['./book-now-screen.component.css']
})
export class BookNowScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['/']);
  }

}
