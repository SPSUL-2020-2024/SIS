import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";

@Component({
	selector: "app-issues",
	templateUrl: "./issues.component.html",
	styleUrls: ["./issues.component.sass"],
})
export class IssuesComponent implements OnInit {
	constructor() {}
	center = 0;
	ngOnInit(): void {}
	updateCenter(center: number, event: any) {
		const el = document.getElementsByClassName("bg-blue-500")[1];
		el.children[0].classList.replace("text-white", "text-gray-500");
		el.classList.remove("rounded-3xl");
		el.classList.remove("bg-blue-500");

		let element = event.currentTarget;
		element.children[0].classList.replace("text-gray-500", "text-white");
		element.classList.add("rounded-3xl");
		element.classList.add("bg-blue-500");

		this.center = center;
	}
	issues = [
		{
			stredisko: "STŘÍBRNÍKY",
			ucebna: "S320",
			user: "admin",
			popis: "rozbitá židle",
		},
		{
			stredisko: "RESSLOVA",
			ucebna: "S350",
			user: "admin",
			popis: "rozbité okno",
		},
		{
			stredisko: "STŘÍBRNÍKY",
			ucebna: "S420",
			user: "doudik",
			popis: "rozbitý projektor",
		},
		{
			stredisko: "STŘÍBRNÍKY",
			ucebna: "S225",
			user: "admin",
			popis: "psychicky narušený ríša",
		},
	];
}
