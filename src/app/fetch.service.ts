import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})


export class FetchService {

  constructor(private http: HttpClient) { }
  fetchbanks(city): Observable<Object>{
    return this.http.get('https://vast-shore-74260.herokuapp.com/banks?city='+city);
  }
}
