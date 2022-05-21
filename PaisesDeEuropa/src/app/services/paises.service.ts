import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://restcountries.com/v2/region/europe';
  }

  getPaises(): Promise<any[]>{
    return firstValueFrom(this.http.get<any[]>(this.url));
  }

}
