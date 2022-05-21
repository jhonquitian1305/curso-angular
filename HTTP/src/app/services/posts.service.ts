import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll(): Promise<any[]>{
    return firstValueFrom(this.httpClient.get<any[]>(this.baseUrl));
  }

  getById(pId: number): Promise<any>{
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${pId}`));
  }

  create({ title = '', body = '', userId = 0 }): Promise<any>{
    const bodyRequest = {title, body, userId};


    //Creando cabeceras
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json; charset=UTF-8"
      })
    }

    return firstValueFrom(this.httpClient.post<any>(this.baseUrl, bodyRequest, httpOptions));
  }

  update({ id = 0, title = '', body = '', userId = 0}): Promise<any>{
    const bodyRequest = { id, title, body, userId}
    return firstValueFrom(this.httpClient.put<any>(`${this.baseUrl}/${id}`, bodyRequest));
  }

  delete(pId: number): Promise<any>{
    return firstValueFrom(this.httpClient.delete(`${this.baseUrl}/${pId}`))
  }

}
