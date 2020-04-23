import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { CursosRoutingModule } from "./cursos-routing.module";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from "./cursos.service";

@NgModule({
  declarations: [
    CursoDetalheComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CursosService
  ],
})
export class CursosModule { }
