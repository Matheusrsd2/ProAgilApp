import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable({
    providedIn: 'root'
})

export class EventoService {
    baseUrl = 'http://localhost:5000/api/evento';
    constructor(private http: HttpClient) {
        
    }
    /*getEvento() {
        return this.http.get(this.baseUrl);
    }*/

    getEvento(): Observable<Evento[]> {
        return this.http.get<Evento[]>(this.baseUrl);
    }
    getEventoById(id:number): Observable<Evento[]> {
        return this.http.get<Evento[]>(`${this.baseUrl}/${id}`);
    }
}