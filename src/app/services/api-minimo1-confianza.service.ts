import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiMinimo1ConfianzaService {
  private apiUrl = 'http://localhost:4000/api/confianza'; // Canvia aquesta URL per la teva API

  constructor(private http: HttpClient) {}

  getConfianzaByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  postConfianzaByUserId(body: any): Observable<any> {
    console.log('Body enviado:', body); // Para depurar
    return this.http.post(`${this.apiUrl}`, body);
  }

  updateConfianzaByUserId(userId: string, body: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, body);
  }

  deleteConfianzaByUserId(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }

}
