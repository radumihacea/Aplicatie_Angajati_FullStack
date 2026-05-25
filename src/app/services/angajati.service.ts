import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Angajat } from '../models/angajat.model';
import { Observable } from 'rxjs'; // Am scos comentariul de aici

@Injectable({
  providedIn: 'root'
})
export class AngajatiService {

  baseApiUrl: string = "https://localhost:7027"; 

  constructor(private http: HttpClient) { }

  getAllAngajati(): Observable<Angajat[]> {
    return this.http.get<Angajat[]>(this.baseApiUrl + '/api/Angajati');
  }

  addAngajat(addAngajatRequest: Angajat): Observable<Angajat> {
    addAngajatRequest.id = '00000000-0000-0000-0000-000000000000';
    
    return this.http.post<Angajat>(this.baseApiUrl + '/api/angajati', addAngajatRequest);
  }
}