import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OwnerRegisterService {
  configUrl = './register/jsondata.txt';

 
  constructor(private http: HttpClient) {
    
   }
   registerOwner(){
    return this.http.get(this.configUrl);
   }

}
