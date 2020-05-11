import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../recipes/Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredients:Ingredient [] = [
    new Ingredient('apples',10),
    new Ingredient('celery', 6)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
