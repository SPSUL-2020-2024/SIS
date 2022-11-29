import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class UserService {
	private apiUrl: string = environment.API_URL + "/UserApi/";
	headers = { "content-type": "application/json" };

	constructor(private http: HttpClient) {}

	getAllUser(): Observable<any> {
		return this.http.post<any>(this.apiUrl + "getAllUsers", {}, { headers: this.headers });
	}
	getUser(userId: number): Observable<any> {
		return this.http.post<any>(this.apiUrl + "getUser", { id: userId }, { headers: this.headers });
	}
	getMyData(): Observable<any> {
		return this.http.post<any>(this.apiUrl + "getMyData", {});
	}
	getData() {
		let data = JSON.parse(localStorage.getItem("userData")!);
		return data;
	}
	getAllRoles(): Observable<any> {
		return this.http.get(this.apiUrl + "getAllRoles", {});
	}
}
