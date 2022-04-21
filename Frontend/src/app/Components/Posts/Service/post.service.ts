import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiURl = "https://spsul-sis.mvahouse.cz/PostApi/"
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.http.post(this.apiURl + "getAllPosts", {},{'headers':headers})
  }
}
