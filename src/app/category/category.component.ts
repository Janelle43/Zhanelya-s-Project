import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  photos = [{name: 'Ginger,Pumpkin, &Spice ', url: 'https://cdn.shopify.com/s/files/1/1981/3807/collections/NVB-Fall-items-_2018_-12217wide_1200x.jpg?v=1538392924'},
    {name: 'Halloween Desserts', url: 'https://cdn.shopify.com/s/files/1/1981/3807/collections/NVB_Fall_items_2018_ghostcookie_2048x.jpg?v=1601262682'},
    {name: 'Cupcakes',  url: 'https://cdn.shopify.com/s/files/1/1981/3807/files/cupcake-group-shot-square_2048x.jpg?v=1595885660'}
  ];
  constructor() {

  }

  ngOnInit(): void {
       }
}
