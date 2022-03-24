import { Injectable } from '@angular/core';
import {UserModel} from "../Models/User.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrl :string = "https://spsul-sis.mvahouse.cz/api/"

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    const headers = { 'content-type': 'application/json'}

    return this.http.post<any>(this.apiUrl + 'getAllUsers',{},{'headers':headers});
  }
}
