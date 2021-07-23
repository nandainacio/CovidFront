import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { HomeComponent } from './components/home/home.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { AplicacaoComponent } from './components/aplicacao/aplicacao.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PessoaService } from './service/pessoa.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FornecedorFormComponent } from './components/fornecedor-form/fornecedor-form.component';
import { FornecedorService } from './service/fornecedor.service';


@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    HomeComponent,
    FornecedorComponent,
    AplicacaoComponent,
    PessoaFormComponent,
    FornecedorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    PessoaService,
    FornecedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
