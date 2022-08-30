import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { UserServiceService } from "../../Services/user-service.service";
import { UserModel } from "../../Models/User.model";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
	selector: "app-all-users",
	templateUrl: "./all-users.component.html",
	styleUrls: ["./all-users.component.scss"],
})
export class AllUsersComponent implements OnInit {
	Users: UserModel[] = [];
	searchText: string = "";
	center = 0;
	constructor(private UserService: UserServiceService, private router: Router) {}

	ngOnInit(): void {
		this.getAllUsers();
	}

	getAllUsers() {
		this.UserService.getAllUser().subscribe(
			(Response) => {
				this.Users = Response;
			},
			(err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status == 401) {
						this.router.navigate(["/login"]);
					}
				}
			}
		);
	}
	updateCenter(center: number, event: any) {
		let el = document.getElementsByClassName("bg-blue-500")[0];
		el.children[0].classList.replace("text-white", "text-gray-500");
		el.classList.remove("rounded-3xl");
		el.classList.remove("bg-blue-500");

		let element = event.currentTarget;
		element.children[0].classList.replace("text-gray-500", "text-white");
		element.classList.add("rounded-3xl");
		element.classList.add("bg-blue-500");

		this.center = center;
	}
	search() {
		if (this.searchText == "") {
			this.getAllUsers();
		} else {
			this.Users = this.Users?.filter((res) => {
				return res.lname.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()) || res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
			});
		}
	}
}
