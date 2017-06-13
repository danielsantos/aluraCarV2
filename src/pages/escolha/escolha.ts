import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl : 'escolha.html'
})
export class EscolhaPage {

    public carro;

    constructor (public navParam : NavParams) {

        this.carro = this.navParam.get('carroSelecionado');

    }

}