import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/model/fornecedor.model';
import { FornecedorService } from 'src/app/service/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  titulo: string = 'Fornecedores'
  fornecedorList: Fornecedor[] = []

  constructor(private _service: FornecedorService,
              private _router: Router ) { }

  ngOnInit(): void {
    this._service.listar().subscribe(fornecedor => this.fornecedorList = fornecedor)
  }

  load(){
    this._service.listar().subscribe(fornecedor => this.fornecedorList = fornecedor)
  }

  showEdit(fornecedor: Fornecedor){
    this._router.navigateByUrl(`/fornecedor/form/${fornecedor.id}`)
  }

  delete(id: number){
    if(confirm("Confirma a exclusão do fornecedor?"))
      confirm("Item excluído com sucesso")
      this._service.deletar(id).subscribe(result => this.load())
  }
}
