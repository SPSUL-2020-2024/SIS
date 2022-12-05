import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-loading-data",
	templateUrl: "./loading-data.component.html",
	styleUrls: ["./loading-data.component.sass"],
})
export class LoadingDataComponent implements OnInit {
	@Input()
	status: any;

	constructor() {}

	ngOnInit(): void {}
}
