import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
// Prepara a aplicação para ser executada em um browser
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // Serão listados todos os componentes diretivas e pipes
  declarations: [
    AppComponent
  ],
  // Outros módulos que deveram ser executados
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], // Serviçõs que ficaram disponiveis para todos os componentes declarados nesse modulo
  bootstrap: [AppComponent]
})
 
export class AppModule { }
