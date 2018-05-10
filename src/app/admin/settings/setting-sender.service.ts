import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SettingSenderService {
  public headers = new HttpHeaders({'Content-Type': 'application/json'});
  configUrl = "api/issueSave" 
  constructor(public http:HttpClient) { 
    console.info("setting service start working");
  }
  saveIssueEntry(data){
   
    return this.http.post<any>(this.configUrl,data.value,{headers:this.headers});
   //(this.configUrl,data.value,{headers:this.headers});
  }


}
