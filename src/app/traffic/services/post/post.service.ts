import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class PostService {
	private apiURl = environment.API_URL;
	constructor(private http: HttpClient) {}
	headers = { "content-type": "application/json" };

	getPosts(): Observable<any> {
		return this.http.get(this.apiURl + "/PostApi/getAllPosts", {});
	}
	getFilesByPostId(postId: number): Observable<any> {
		return this.http.get(this.apiURl + "/FileApi/getFilesByPostId?postId=" + postId, {});
	}
	getPriorities(): Observable<any> {
		return this.http.post(this.apiURl + "/PostApi/getPriorities", {}, { headers: this.headers });
	}
	getCenters(): Observable<any> {
		return this.http.post(this.apiURl + "/PostApi/getCenters", {}, { headers: this.headers });
	}
	deletePost(postId: number) {
		const formData = {
			postId: postId,
		};
		this.http.post(this.apiURl + "/deletePost", formData).subscribe();
	}
}
