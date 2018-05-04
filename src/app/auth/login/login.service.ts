import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

 
@Injectable()
export class LoginService {
  public headers = new HttpHeaders({'Content-Type': 'application/json'});
  configUrl = '/api/login';
  

 
  constructor(private http: HttpClient){
    console.log("Login Service works")

  }
  
  loginConnect(data){
    return this.http.post<any>(this.configUrl,data.value,{headers:this.headers});
  }




}
