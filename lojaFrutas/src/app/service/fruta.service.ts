import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruta } from '../model/Fruta';


@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  constructor(private http: HttpClient) { }

  getAllFrutas() {
    return this.http.get('http://31.220.57.121:9080/produtos/');
  }

  postAllFrutas(fruta: Fruta) {
    return this.http.post('http://31.220.57.121:9080/produtos/', fruta)
  }

  putFruta(fruta: Fruta) {
    return this.http.put('http://31.220.57.121:9080/produtos/', fruta)
  }

  getByIdFruta(id: number) {
    return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
  }

  deleteFruta(id: number) {
    return this.http.delete(`http://31.220.57.121:9080/produtos/${id}`)
  }

}
