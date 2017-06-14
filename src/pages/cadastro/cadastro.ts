import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;

  public nome: string;
  public endereco: string;
  public email: string;
  public data: string = new Date().toISOString();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _http: Http) {

    this.carro = this.navParams.get('carro');
    this.precoTotal = this.navParams.get('precoTotal');

  }

  agenda() {
    
    this._http
            .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${this.carro.nome}&nome=${this.nome}&preco=${this.precoTotal}&endereco=${this.endereco}&email=${this.email}&dataAgendamento=${this.data}`)
            .toPromise()
            .then(() => alert('Sucesso'))
            .catch(erro => alert('Falha'));

  }

}
