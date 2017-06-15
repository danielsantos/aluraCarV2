import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { Agendamento } from '../../domain/agendamento/agendamento';

@Component({
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;

  public agendamento: Agendamento;

  private _alert: Alert;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _http: Http,
              private _alertCtrl: AlertController) {

    this.carro = this.navParams.get('carro');
    this.precoTotal = this.navParams.get('precoTotal');

    this.agendamento = new Agendamento(this.carro, this.precoTotal);
    
    this._alert = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'Ok', handler: () => this.navCtrl.setRoot(HomePage)}]
    });

  }

  agenda() {
    
    this._http
            .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${this.agendamento.carro.nome}&nome=${this.agendamento.nome}&preco=${this.agendamento.valor}&endereco=${this.agendamento.endereco}&email=${this.agendamento.email}&dataAgendamento=${this.agendamento.data}`)
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
