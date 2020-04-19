import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {

  @Output() onStop = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onStopButtonClicked() {
    this.onStop.emit('Stopped');
  }

}
