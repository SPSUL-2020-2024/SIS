import { Injectable } from '@angular/core';
import {UserModel} from "../Models/User.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../login/Service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrl :string = "https://spsul-sis.mvahouse.cz/UserApi/"

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post<any>(this.apiUrl + 'getAllUsers',{},{'headers':headers});
  }
  getMyData(): Observable<any>{
    return this.http.post<any>(this.apiUrl + 'getMyData',{});
  }
}
