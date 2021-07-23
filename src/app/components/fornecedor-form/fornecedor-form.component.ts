import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/model/fornecedor.model';
import { FornecedorService } from 'src/app/service/fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent implements OnInit {

  titulo: string = 'Cadastro de Fornecedores'
  error: boolean = false
  errorMsg: string = ""
  id: number = 0

  form = this.formBuilder.group({
  nome: "",
  qtdApli:""
  })

  constructor(private formBuilder: FormBuilder,
              private _service: FornecedorService,
              private _router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap;
    this.id = Number(param.get('id'))
    this._service.obter(this.id)
        .subscribe(fornecedor => {
          this.form.get('nome')?.setValue(fornecedor.nome)
          this.form.get('qtdApli')?.setValue(fornecedor.qtdApli)
        })
  }

  save(){
    var fornecedor: Fornecedor = this.form.value
    fornecedor.id = this.id

    if(this.id == 0)
      this._service.inserir(fornecedor)
          .subscribe(response => {
            this.error = false
            console.log(response)
            this._router.navigateByUrl("/fornecedor")
          }, e => {
            this.error = true
            this.errorMsg = e.error.mensagem
            //console.log(e.error.mensagem)
          })
    //console.log(this.form.value)
    else
      this._service.atualizar(fornecedor)
      .subscribe(response => {
        this.error = false
        console.log(response)
        this._router.navigateByUrl("/fornecedor")
      }, e => {
        this.error = true
        this.errorMsg = e.error.mensagem
      })
    }

}
