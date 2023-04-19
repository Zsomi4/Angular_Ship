import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getShips() {
    let endpoint = 'ships'
    let url = environment.api + endpoint;
    return this.http.get<any>(url);
  }
}


