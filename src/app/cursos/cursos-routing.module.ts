import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado.component';

const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: CursoDetalheComponent },
    { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent }
];


@NgModule({
  imports: [
     RouterModule.forChild(cursosRoutes)
  ],
  exports: [RouterModule],
})

export class CursosRoutingModule { }
