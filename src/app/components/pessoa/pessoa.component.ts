import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  titulo: string = 'Pessoas'
  pessoaList: Pessoa[] = [];
  
  constructor(private _service: PessoaService,
              private _router: Router) { }

  ngOnInit(): void {
    this._service.listar().subscribe(pessoas => this.pessoaList = pessoas)
  }
  
  load(){
    this._service.listar().subscribe(pessoas => this.pessoaList = pessoas)
  }
  showEdit(pessoa:Pessoa){
    this._router.navigateByUrl(`/pessoa/form/${pessoa.id}`)
  }

  delete(id:number){
    if(confirm("Você deseja realmente EXCLUIR esse registro?"))
      confirm("Item excluido com sucesso")
      this._service.deletar(id).subscribe(result => this.load())
  }
}
