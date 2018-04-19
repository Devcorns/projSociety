import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OwnerRegisterService {
  
  public headers = new HttpHeaders({'Content-Type': 'application/json', 'charset' : 'UTF-8'});
  configUrl = '/api/register';
  

 
  constructor(private http: HttpClient) {
    
   }
   registerOwner(data): Observable<any>{
    console.log(this.headers);
    return this.http.post<any>(this.configUrl, data.value, {headers:this.headers});
    
   }

}
