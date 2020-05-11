import { Component, OnInit } from '@angular/core';
import { FrutaService } from '../service/fruta.service';
import { Fruta } from '../model/Fruta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  fruta: Fruta = new Fruta;

  constructor(private frutaService: FrutaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.findById(id);
  }

  findById(id: number) {
    this.frutaService.getByIdFruta(id).subscribe((resp: Fruta) => {
      this.fruta = resp
    })
  }

  salvar() {
    this.frutaService.putFruta(this.fruta).subscribe((resp: Fruta) => {
      this.fruta = resp
      this.router.navigate(['/loja'])
      location.assign('/loja')
    })
  }

}
