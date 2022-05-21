import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'https://rickandmortyapi.com/api';
  }

  getAll(pPage: number = 1): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.baseUrl}/character?page=${pPage}`));
  }

}
