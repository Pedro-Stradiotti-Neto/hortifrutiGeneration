import { Component, OnInit } from '@angular/core';
import { FrutaService } from '../service/fruta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruta } from '../model/Fruta';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  fruta: Fruta = new Fruta

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

  btnSim() {
    this.frutaService.deleteFruta(this.fruta.id).subscribe(() => {
      this.router.navigate(['/loja'])
    })
  }

  btnNao() {
    this.router.navigate(['/loja'])
  }
}
