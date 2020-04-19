import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvenNumberComponent } from './even-number/even-number.component';
import { OddNumberComponent } from './odd-number/odd-number.component';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenNumberComponent,
    OddNumberComponent,
    StartComponent,
    StopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
