import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  //endpoint: string = "Pessoa/listar"
  baseUrl: string = environment.baseUrl
  constructor(private _http:HttpClient) { }

  listar(): Observable<Pessoa[]>{
    return this._http.get<Pessoa[]>(`${this.baseUrl}/Pessoa/listar`)
  }
  obter(id:number): Observable<Pessoa>{
    const options = {
      params: new HttpParams()
          .set('id', id.toString())
    }
    return this._http.get<Pessoa>(`${this.baseUrl}/Pessoa/obter`, options)
    // var paramId = new HttpParams();
    // paramId.set('id', id.toString())
    // return this._http.get<Pessoa>(`${this.baseUrl}/Pessoa/obter`, {params:paramId})
  }

  inserir(pessoa: Pessoa): Observable<any>{
    return this._http.post<any>(`${this.baseUrl}/Pessoa/inserir`, pessoa)
  }
  atualizar(pessoa: Pessoa): Observable<any>{
    return this._http.put<any>(`${this.baseUrl}/Pessoa/atualizar`, pessoa)
  }

  deletar(id:number): Observable<any>{
    const options = {
      params: new HttpParams()
          .set('id', id.toString())
    }
    return this._http.delete<any>(`${this.baseUrl}/Pessoa/deletar`, options)
  }
}
