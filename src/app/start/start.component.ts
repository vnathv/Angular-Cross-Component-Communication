import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

 @Output() onStart = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartButtonClicked() {
    this.onStart.emit("Start");
  };
}
