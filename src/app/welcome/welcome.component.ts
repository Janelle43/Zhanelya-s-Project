import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  price = 'cu';
  price1 = 'cu';
  price2 = 'cu';
  price3 = 'cu';
  money = 'usd';
  constructor() { }

  ngOnInit(): void {
  }

  exchage(){
    this.currency();
    if (this.price === 'cu'){
      this.price = 'kz';
    } else{
      this.price = 'cu';
    }
    if (this.price1 === 'cu'){
      this.price1 = 'kz';
    } else{
      this.price1 = 'cu';
    }
    if (this.price2 === 'cu'){
      this.price2 = 'kz';
    } else{
      this.price2 = 'cu';
    }
    if (this.price3 === 'cu'){
      this.price3 = 'kz';
    } else{
      this.price3 = 'cu';
    }
  }

  currency(){
    if (this.money === 'usd'){
      this.money = 'kz';
    } else{
      this.money = 'usd';
    }
  }
}
