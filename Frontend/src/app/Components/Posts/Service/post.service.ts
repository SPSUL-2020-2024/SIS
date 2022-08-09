import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class PostService {
	private apiURl = environment.API_URL + "/PostApi/";
	constructor(private http: HttpClient) {}
	headers = { "content-type": "application/json" };

	getPosts(): Observable<any> {
		return this.http.post(this.apiURl + "getAllPosts", {}, { headers: this.headers });
	}
	getPriorities(): Observable<any> {
		return this.http.post(this.apiURl + "getPriorities", {}, { headers: this.headers });
	}
	getCenters(): Observable<any> {
		return this.http.post(this.apiURl + "getCenters", {}, { headers: this.headers });
	}
}
