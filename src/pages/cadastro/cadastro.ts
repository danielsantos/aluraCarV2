import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
import { HomePage } from '../home/home';
import { Agendamento } from '../../domain/agendamento/agendamento';
import { AgendamentoService } from '../../domain/agendamento/agendamento-service';

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
              private _service: AgendamentoService,
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

    if (!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email ) {

      this._alertCtrl.create({
        title: 'Preenchimento Obrigatorio',
        subTitle: 'Voce deve preencher todas as informacoes',
        buttons: [{ text: 'Ok' }]
      }).present();

      return;
    }
    
      this._service.agenda(this.agendamento)
        .then(confirmado => {

          confirmado ?
            this._alert.setSubTitle('Agendamento realizado com Sucesso!') :
            this._alert.setSubTitle('Nao foi possivel realizar o agendamento');
            this._alert.present();

        })
        
  }

}