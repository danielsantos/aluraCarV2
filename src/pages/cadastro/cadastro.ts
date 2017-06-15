import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
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

  private _alert: Alert;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _http: Http,
              private _alertCtrl: AlertController) {

    this.carro = this.navParams.get('carro');
    this.precoTotal = this.navParams.get('precoTotal');
    
    this._alert = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'Ok'}]
    });

  }

  agenda() {
    
    this._http
            .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${this.carro.nome}&nome=${this.nome}&preco=${this.precoTotal}&endereco=${this.endereco}&email=${this.email}&dataAgendamento=${this.data}`)
            .toPromise()
            .then(() => {
              this._alert.setSubTitle('Agendamento realizado com Sucesso!');
              this._alert.present();
            })
            .catch(erro => {
              this._alert.setSubTitle('Nao foi possivel realizar o agendamento');
              this._alert.present();
            });

  }

}
