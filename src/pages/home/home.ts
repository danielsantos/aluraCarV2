import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public carros;

  constructor(public navCtrl: NavController, private _http : Http) {

    this._http
      .get('http://aluracar.herokuapp.com/')
      .map(res => res.json())
      .toPromise()
      .then(carros => this.carros = carros);
  }

}