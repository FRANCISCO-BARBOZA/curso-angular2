import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from "./cursos/cursos.component";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";

const appRoutes: Routes = [
  //{ path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent }
  //{ path: '**', component: PaginaNaoEncontradaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
