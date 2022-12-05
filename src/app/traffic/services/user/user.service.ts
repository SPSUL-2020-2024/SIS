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
		return this.http.get<any>(this.apiUrl + "getUser/" + userId, { headers: this.headers });
	}
	getMyData(): Observable<any> {
		return this.http.post<any>(this.apiUrl + "getMyData", {});
	}
	getData() {
		let data = JSON.parse(localStorage.getItem("userData")!);
		return data[0];
	}
	getAllRoles(): Observable<any> {
		return this.http.get(this.apiUrl + "getAllRoles", {});
	}
	createUser(userData: any) {
		this.http.post(this.apiUrl + "createUser", userData).subscribe();
	}
	editUser(userId: number, userData: any) {
		userData.id = userId;
		this.http.post(this.apiUrl + "editUser", userData).subscribe();
	}
	deleteUser(userId: number) {
		this.http.post(this.apiUrl + "deleteUser", { userId: userId }).subscribe();
	}
}
