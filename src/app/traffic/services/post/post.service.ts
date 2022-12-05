import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { UserService } from "../user/user.service";

@Injectable({
	providedIn: "root",
})
export class PostService {
	private apiURl = environment.API_URL;

	constructor(private userService: UserService, private http: HttpClient) {}

	headers = { "content-type": "application/json" };

	getAllPosts(): Observable<any> {
		return this.http.get(this.apiURl + "/PostApi/getAllPosts", {});
	}
	getPost(postId: number): Observable<any> {
		return this.http.get(this.apiURl + "/PostApi/getPost/" + postId, {});
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
	editPost(postId: number, postData: any) {
		postData.id = postId;
		postData.userId = this.userService.getData().id;
		this.http.post(this.apiURl + "/PostApi/editPost", postData).subscribe();
	}
	deletePost(postId: number) {
		const formData = {
			postId: postId,
		};
		this.http.post(this.apiURl + "/PostApi/deletePost", formData).subscribe();
	}
}
