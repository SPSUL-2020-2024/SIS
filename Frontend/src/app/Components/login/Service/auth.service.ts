import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private apiUrl: string = environment.API_URL + "/UserApi/";

	constructor(private http: HttpClient) {}

	loginUser(user: any) {
		return this.http.post<any>(this.apiUrl + "verifyUser", user);
	}
	lodgedIn() {
		return true; //FIXME: dočasné řešení
		if (localStorage.getItem("token") !== null) {
			return this.http.post(this.apiUrl + "verifyToken", { token: this.getToken() }).subscribe(
				(res) => {
					return true;
				},
				(err) => {
					return false;
				}
			);
		} else {
			return false;
		}
	}
	getToken() {
		return localStorage.getItem("token");
	}
}
