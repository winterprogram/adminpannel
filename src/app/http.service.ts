import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  private url = 'http://localhost:3000'

  public getMerchantData(): Observable<any> {
    return this.http.get(`${this.url}/getmerchantinfo`)
  }

  public getUserData():Observable<any>{
    return this.http.get(`${this.url}/getuserData`)
  }
}
