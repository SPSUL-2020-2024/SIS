import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-main-dashboard",
	templateUrl: "./main-dashboard.component.html",
	styleUrls: ["./main-dashboard.component.sass"],
})
export class MainDashboardComponent implements OnInit {
	httpResponse: any = false;
	httpError: any = null;
	polePrispevku: any[] = [];
	timelines: any[] = [];
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.timelines = [
			{ id: 1, name: "Tento týden" },
			{ id: 2, name: "Minulý týden a starší" },
		];

		this.http.post("https://spsul-sis.mvahouse.cz/PostApi/getAllPosts", {}).subscribe(
			(Response) => ((this.httpResponse = true), Object.entries(Response).forEach(([key, value]) => this.polePrispevku.push(value))),
			(error) => (this.httpError = error)
		);
		//this.http.post("https://spsul-sis.mvahouse.cz/PosatApi/getAllPosts", {}).subscribe((Response) => {
		//	Object.entries(Response).forEach(([key, value]) => this.polePrispevku.push(value));
		//});
	}
}
