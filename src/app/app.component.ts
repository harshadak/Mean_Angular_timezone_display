import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zones: Array<string> = ['PST', 'MST', 'CST', 'EST', 'Clear'];
  times = [];
  // toggle: Array<boolean> = [false, false, false, false, false];
  lastClicked = "";
  timeNow = Date.now();

  showTimezone(i) {
    console.log("Button clicked");
    this.times = [Date.now(), Date.now() + (1 * 3600000), Date.now() + (2 * 3600000), Date.now() + (3 * 3600000)];
    this.lastClicked = this.zones[i];
    console.log(this.timeNow);
    this.timeNow = this.times[i];
  }
}