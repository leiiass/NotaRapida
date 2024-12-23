import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../notas/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaRapidaService {

  private apiUrl = 'https://localhost:7211/api/Nota';
  constructor(private http: HttpClient) { }

  obterTodasNotas(): Observable<any[]> {
    let url = `${this.apiUrl}/tb01`;
    return this.http.get<any[]>(url);
  }

  obterPorId(id: number){
    let url = `${this.apiUrl}/${id}/tb01`
    return this.http.get<Nota>(url);
  }

  criarNota(nota: Nota): Observable<Nota> {
    let url = `${this.apiUrl}/tb01/create`;
    return this.http.post<any>(url, nota);
  }

  atualizarNota(id: number, texto: string): Observable<void> {
    let url = `${this.apiUrl}/tb01/${id}/update`;
    return this.http.patch<void>(url, JSON.stringify(texto), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  removerNota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tb01/${id}/delete`);
  }
}
