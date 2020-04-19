import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cross-component';
  currentState: string;

  currentSeconds: number[] = [];
  interval: any;

  constructor() {
  }

  onStartClicked(state: string) {
    this.currentState = state;
   this.interval = setInterval(() => {
      const date = new Date();
      this.currentSeconds.push(date.getSeconds());
    }, 1000);
  }

  onStopClicked(state: string){
    clearInterval(this.interval);
    this.currentSeconds = [];
    this.currentState = state;
  }
}
