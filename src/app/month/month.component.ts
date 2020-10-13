import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  count = 0;
  handleButtonClick(str: string) {
    if (str === '+') {
      this.count++;
    } else {
      this.count--;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
