import { Component, OnInit } from '@angular/core';
import { FrutaService } from '../service/fruta.service';
import { Fruta } from '../model/Fruta';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaFrutas: Fruta[];
  fruta: Fruta = new Fruta;

  constructor(private frutaService: FrutaService) { }

  ngOnInit() {
    this.findAllFrutas()
  }

  findAllFrutas() {
    this.frutaService.getAllFrutas().subscribe((resp: Fruta[]) => {
      this.listaFrutas = resp
    })
  }

  cadastrar() {
    this.frutaService.postAllFrutas(this.fruta).subscribe((resp: Fruta) => {
      this.fruta = resp;
      location.assign('/loja');
    })
  }
}
