import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fornecedor } from '../model/fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl: string = environment.baseUrl
  constructor(private _http: HttpClient) { }

  listar(): Observable<Fornecedor[]>{
    return this._http.get<Fornecedor[]>(`${this.baseUrl}/Fornecedor/listar`)
  }

  obter(id: number): Observable<Fornecedor>{
      const options = {
        params: new HttpParams()
          .set('id', id.toString())
      }
      return this._http.get<Fornecedor>(`${this.baseUrl}/Fornecedor/obter`, options)
  }

  inserir(fornecedor: Fornecedor): Observable<any>{
    return this._http.post<any>(`${this.baseUrl}/Fornecedor/inserir`, fornecedor)
  }

  atualizar(fornecedor: Fornecedor): Observable<any>{
    return this._http.put<any>(`${this.baseUrl}/Fornecedor/atualizar`, fornecedor)
  }

  deletar(id: number): Observable<any>{
    const options = {
      params: new HttpParams()
      .set('id', id.toString())
    }
    return this._http.delete<any>(`${this.baseUrl}/Fornecedor/deletar`, options)
  }
}
