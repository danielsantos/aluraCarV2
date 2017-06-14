import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl : 'escolha.html'
})
export class EscolhaPage {

    public carro;
    public acessorios;

    constructor (public navParam : NavParams) {

        this.carro = this.navParam.get('carroSelecionado');
        this.acessorios = [

            { nome: 'Freio ABS' , preco : 800 },
            { nome: 'Ar-Condicionado' , preco : 1000 },
            { nome: 'MP3 Player' , preco : 500 }

        ];

    }

}