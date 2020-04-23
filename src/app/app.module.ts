import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app.routing.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { CursosModule } from "./cursos/cursos.module";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    CursosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
