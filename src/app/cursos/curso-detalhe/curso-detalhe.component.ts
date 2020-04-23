import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) { }

  ngOnInit() {
    const idCurso = this.route.snapshot.params['id'];
    this.curso = this.cursosService.getCurso(idCurso);

    if(this.curso == null) {
      this.router.navigate(['/curso-nao-encontrado'])
    }
  }

}
