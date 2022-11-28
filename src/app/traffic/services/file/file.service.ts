import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class FileService {
	private apiURl = environment.API_URL;
	constructor(private http: HttpClient) {}
	headers = { "content-type": "application/json" };

	downloadFile(fileUuid: string): Observable<any> {
		return this.http.get(this.apiURl + "/FileApi/downloadUrl/" + fileUuid, {});
	}

	humanFileSize(bytes: number, si = false, dp = 1) {
		const thresh = si ? 1000 : 1024;

		if (Math.abs(bytes) < thresh) {
			return bytes + " B";
		}

		const units = si ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
		let u = -1;
		const r = 10 ** dp;

		do {
			bytes /= thresh;
			++u;
		} while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

		return bytes.toFixed(dp) + " " + units[u];
	}
}
