/*
 File: app.service.ts
 Author: Gubis Zsombor Dániel
 Copyright: 2022, Gubis Zsombor Dániel
 Group: Szoft_II_N
 Date: 2023-04-19
 Github: https://github.com/zsomi4/
 Licenc: GNU GPL
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:8000/ships";
  constructor(private http: HttpClient) { }
  
  getShips() {
    return this.http.get<any>(this.url);
  }

  addShips(ship: any) {
    let httpHeader = new HttpHeaders({'Content-Type': 'application/json'});
    let httpOptions = {
      headers: httpHeader
    };
    return this.http.post(this.url, ship, httpOptions);
  }  
}
