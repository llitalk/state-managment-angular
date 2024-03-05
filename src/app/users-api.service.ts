import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
#http = inject(HttpClient)

get(){
  return this.#http.get(`https://jsonplaceholder.typicode.com/users`)
}
}
