import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LibroRegModel } from './models/libro.reg.model';

@Injectable({
  providedIn: 'root'
})
export class GestionLibroService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registrarLibro(data: LibroRegModel): Observable<LibroRegModel> {
    return this.http.post<LibroRegModel>(`${this.apiUrl}/api/books`, data);
  }
}
