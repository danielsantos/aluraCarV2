import { Http } from '@angular/http';
import { Agendamento } from '../../domain/agendamento/agendamento';
import { Injectable } from '@angular/core';
import { AgendamentoDao } from '../../domain/agendamento/agendamento-dao';

@Injectable()
export class AgendamentoService {

    constructor(private _http: Http, private _dao: AgendamentoDao) {}

    agenda(agendamento: Agendamento) {

        return this._http
            .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.valor}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`)
            .toPromise()
            .then(() => agendamento.confirmado = true, err => console.log(err))
            .then(() => this._dao.salva(agendamento))
            .then(() => agendamento.confirmado);

    }

}