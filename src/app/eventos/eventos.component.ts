
import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;
  eventosFiltrados: any = [];
  mostrarImagem = false;

  _filtroLista: string;

  /*get filtroLista(){
    return this._filtroLista;
  }
  set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this._filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }
*/
  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.getEvento();
  }

  public filtrarEventos (filtrarPor: string): any {
    filtrarPor = filtrarPor.toLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  public alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  public getEvento () {
    this.eventos = this.eventoService.getEvento().subscribe(response => {
      this.eventos = response;
    }, error=> {
      console.log(error)
    })
  }

}
