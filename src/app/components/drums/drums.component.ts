import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { filter } from 'rxjs';

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.scss']
})
export class DrumsComponent implements OnInit, OnDestroy {

  private input$: ReplaySubject<string>;
  private subscriptions: Subscription;
  private allowableKeys = ['k', ' ', 'd'];
  constructor() {
    this.subscriptions = new Subscription();
    this.input$ = new ReplaySubject();
    const inputSub = this.input$
      .pipe(
        filter(key => this.allowableKeys.includes),
      ).subscribe(res => console.log('key press: ', res));
    this.subscriptions.add(inputSub);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public onKeyup(evt): void {
    console.log('press: ', evt.key);
    this.input$.next(evt.key)
  }

}
