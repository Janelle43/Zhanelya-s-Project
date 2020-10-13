import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
 SomeData = new Date();
 Plc = 'Policy';
 Subs = 'Subscribe to our email newsletter';
 Visit = 'Visit Us';
 str = 'test';
 @Output() eventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
 add(Data: any){
   this.eventEmitter.emit(Data);
 }

}
