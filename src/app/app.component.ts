import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'bandit-ui';
  public displayHome$: Observable<boolean>;

  constructor(
    private activeRoute: ActivatedRoute,
  ) {
    this.displayHome$ = this.activeRoute.queryParams
      .pipe(
        filter(params => params && params.hasOwnProperty('admin')),
        map(params => params.admin === 'true'),
      );
  }
}
