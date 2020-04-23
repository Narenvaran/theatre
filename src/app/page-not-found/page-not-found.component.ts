import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  pnfSubscription:any;
  content:string;
  constructor( private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pnfSubscription = this.route
      .data
      .subscribe(routeData => this.content = routeData.message);
  }

  ngOnDestroy() {
    this.pnfSubscription.unsubscribe();
  }

  goHome(){
    this.router.navigate(['/']);
  }

}
