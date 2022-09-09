import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
	providedIn: "root",
})
export class FileManagerService {
	private apiURl = environment.API_URL + "/FileApi";

	constructor(private http: HttpClient) {}

	getFileSizeLimit() {
		return this.http.get(`${this.apiURl}/fileSizeLimit`);
	}

	upload(file: File, defer_uuid: any): Observable<HttpEvent<any>> {
		const formData: FormData = new FormData();
		formData.append("file", file);
		formData.append("defer_uuid", defer_uuid);
		const req = new HttpRequest("POST", `${this.apiURl}/upload`, formData, {
			reportProgress: true,
			responseType: "json",
		});
		return this.http.request(req);
	}

	getFiles(): Observable<any> {
		return this.http.get(`${this.apiURl}/files`);
	}
}
