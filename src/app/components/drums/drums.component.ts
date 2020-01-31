import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators'
import { Drum } from './drums.model';

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.scss']
})
export class DrumsComponent implements OnInit, OnDestroy {

  private input$: ReplaySubject<string>;
  private subscriptions: Subscription;
  private allowableKeys = ['k', ' ', 'd', 'r'];
  private keyToAudioMap = {
    'd': Drum.Snare,
    ' ': Drum.Bass,
    'k': Drum.ClosedHiHat,
    'r': Drum.CrashCymbal,
  };
  constructor() {
    this.subscriptions = new Subscription();
    this.input$ = new ReplaySubject();
    const inputSub = this.input$
      .pipe(
        filter(key => this.allowableKeys.includes(key)),
      ).subscribe(key => this.playAudio(key));
    this.subscriptions.add(inputSub);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public onKeyup(evt): void {
    this.input$.next(evt.key)


  }

  private playAudio(key: string): void {
    const audio = new Audio();
    audio.src = this.keyToAudioMap[key];
    audio.load();
    audio.play();
  }

}
