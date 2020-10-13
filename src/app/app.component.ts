import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';
  array = [];
  addItem(itm: any){
this.array.push(itm);
console.log(itm);
  }
}
