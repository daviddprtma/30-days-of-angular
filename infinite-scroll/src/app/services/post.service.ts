import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(pageNumber: number, limit: number): Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}?page=${pageNumber}&limit=${limit}`
    );
  }
}
