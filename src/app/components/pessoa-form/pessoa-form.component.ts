import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  titulo: string = "Cadastro de Pessoas"
  error: boolean = false;
  errorMsg: string = ""
  id: number = 0;

  form = this.formBuilder.group({
    nome: "",
    cpf: ""
  })
  constructor(private formBuilder: FormBuilder,
              private _service: PessoaService,
              private _router: Router,
              private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    const param = this.route.snapshot.paramMap;
    this.id = Number(param.get('id'))
    this._service.obter(this.id)
        .subscribe(pessoa => {
          this.form.get('nome')?.setValue(pessoa.nome)
          this.form.get('cpf')?.setValue(pessoa.cpf)
        })
  }

  save(){
    var pessoa: Pessoa = this.form.value
    pessoa.id = this.id

    if(this.id == 0)
      this._service.inserir(pessoa)
          .subscribe(response => {
            this.error = false
            console.log(response)
            this._router.navigateByUrl("/pessoa")
          }, e => {
            this.error = true
            this.errorMsg = e.error.mensagem
            //console.log(e.error.mensagem)
          })
    //console.log(this.form.value)
    else
      this._service.atualizar(pessoa)
      .subscribe(response => {
        this.error = false
        console.log(response)
        this._router.navigateByUrl("/pessoa")
      }, e => {
        this.error = true
        this.errorMsg = e.error.mensagem
      })
    }
  }