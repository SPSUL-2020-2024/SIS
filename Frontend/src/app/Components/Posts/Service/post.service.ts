import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiURl = "https://spsul-sis.mvahouse.cz/PostApi/"
  constructor(private http: HttpClient) { }
  headers = { 'content-type': 'application/json'}

  getPosts(): Observable<any>{

    return this.http.post(this.apiURl + "getAllPosts", {},{'headers':this.headers})
  }
  getPriorities(): Observable<any>{
    return this.http.post(this.apiURl + "getPriorities", {},{'headers':this.headers})
  }
  getCenters(): Observable<any>{
    return this.http.post(this.apiURl + "getCenters", {},{'headers':this.headers})
  }
}
