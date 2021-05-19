import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // HttpClient - Can make an ip request
  // And he is an observable that can be subscribed too
  constructor(private http: HttpClient) { }

  doApiGet(_url: string): any {
    // Returns an observable that can be subscribed too
    return this.http.get(_url);
  }
}
