import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private http:HttpClient
  ) { }

  uploadFile(formdata:FormData):Observable<any>{
    return this.http.post('http://localhost:8080/api/media/upload',formdata);
  }
}
