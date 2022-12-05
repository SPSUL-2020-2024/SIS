import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/traffic/services/user/user.service";

@Component({
	selector: "app-top-overlay",
	templateUrl: "./top-overlay.component.html",
	styleUrls: ["./top-overlay.component.sass"],
})
export class TopOverlayComponent implements OnInit {
	date: Date = new Date();
	dateFormatted: string = "";
	evenOddWeek: string = "";
	userData = {
		name: "",
		lname: "",
	};
	constructor(private userService: UserService) {
		let days = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
		this.dateFormatted = `${days[this.date.getDay()]}, ${this.date.getDate()}. ${this.date.getMonth() + 1}. ${this.date.getFullYear()}`;
		let evenOddWeekNumber = this.getWeekNumber(this.date) % 2;
		if (evenOddWeekNumber == 0) {
			this.evenOddWeek = "Sudý týden";
		} else {
			this.evenOddWeek = "Lichý týden";
		}
	}

	getWeekNumber(thisDate: Date) {
		let startDate: Date = new Date(thisDate.getFullYear(), 0, 1);
		let test = thisDate.getTime() - startDate.getTime();
		var days = Math.floor(test / (24 * 60 * 60 * 1000));
		var weekNumber = Math.ceil(days / 7);
		return weekNumber;
	}

	ngOnInit(): void {
		this.changeName();
	}

	changeName() {
		this.userData.name = JSON.parse(localStorage.getItem("userData")!)[0].name;
		this.userData.lname = JSON.parse(localStorage.getItem("userData")!)[0].lname;
		window.removeEventListener("storage", this.changeName, false);
	}
}
