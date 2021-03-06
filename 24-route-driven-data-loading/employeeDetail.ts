import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';

import { EmployeeLoader, IEmployee } from './employeeLoader';

@Component({
  selector: 'employee-detail',
  templateUrl: './employeeDetail.html'
})
export class EmployeeDetailComponent implements OnInit {
  employee$: Observable<IEmployee>;

  constructor(private route: ActivatedRoute, private loader: EmployeeLoader) {
    console.log('EmployeeDetailComponent constructor');
   }

  ngOnInit() {
    console.log('EmployeeDetailComponent ngOnInit');
    this.employee$ = this.route.params
      .map(params => params['employeeId'])
      .switchMap(id => this.loader.getDetails(id)).share();

      // this.employee$ = this.route.params
      // .map(params => params['employeeId'])
      // .switchMap(id => this.loader.getDetails(id)).share()
      // .switchMap(details => {
      //   if (details.jobId > 3) {
      //     return b;
      //   } else {
      //     return a;
      //   }
      // }); or use "filter" operator . See http://reactivex.io/
      // .filter(details => details.jpbId > 3)

      //switchMap understands that it has got an observable and subscribes to it automatically. It unscribes the original one and we subscribe to new one.
  }
}
