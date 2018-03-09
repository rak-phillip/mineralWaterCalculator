import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {waterList} from "../../app/mock-mineral-water";
import {mineralWater} from "../../models/mineralWater";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // TODO: List Recipes
  //  TODO: Import list of recipes from spreadsheet

  // TODO: Save Recipes
  // TODO: Create Recipes
  // TODO: Add Credits
  // TODO: Add links to ingredients? How can we reduce the barrier of entry to allowing people to purchase?:w

  waterTemplate;
  water: mineralWater[] = waterList;

  constructor(public navCtrl: NavController) {

  }

}
