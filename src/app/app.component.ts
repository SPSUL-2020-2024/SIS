import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

declare function onContentLoadJs(): any;
declare function onContentChangeJs(): any;

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.sass"],
})
export class AppComponent {
	title = "sis2";
	withoutOverlay = ["/login", "/payment_required"];

	constructor(public router: Router) {
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((x) => {
			//console.log("val", x);
			onContentChangeJs();
		});
	}
}
