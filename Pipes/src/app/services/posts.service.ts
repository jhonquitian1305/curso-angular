import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Promise<any[]>{
    return firstValueFrom(this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts'));
  }
}
