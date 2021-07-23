import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacaoComponent } from './components/aplicacao/aplicacao.component';
import { FornecedorFormComponent } from './components/fornecedor-form/fornecedor-form.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { HomeComponent } from './components/home/home.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pessoa", component: PessoaComponent }, 
  { path: "pessoa/form", component: PessoaFormComponent },
  { path: "pessoa/form/:id", component: PessoaFormComponent },
  { path: "fornecedor", component: FornecedorComponent},
  { path: "aplicacao", component: AplicacaoComponent},
  { path: "fornecedor/form", component: FornecedorFormComponent},
  { path: "fornecedor/form/:id", component: FornecedorFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
