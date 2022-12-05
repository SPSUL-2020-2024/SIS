import { EditUserComponent } from "./../edit-user/edit-user.component";
import { AddUserComponent } from "./../add-user/add-user.component";
import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { UserService } from "../../../../services/user/user.service";
import { UserModel } from "../../../../models/user.model";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

@Component({
	selector: "app-all-users",
	templateUrl: "./all-users.component.html",
	styleUrls: ["./all-users.component.sass"],
})
export class AllUsersComponent implements OnInit {
	Users: UserModel[] = [];
	searchText: string = "";
	center = 0;
	constructor(private userService: UserService, private router: Router, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.getAllUsers();
	}

	openAddUser() {
		let dialogRef = this.dialog.open(AddUserComponent, {
			height: "auto",
			width: "500px",
			panelClass: "custom-dialog-container",
		});
	}

	openEditUser(userId: number) {
		let dialogRef = this.dialog.open(EditUserComponent, {
			height: "auto",
			width: "500px",
			panelClass: "custom-dialog-container",
		});
		dialogRef.componentInstance.userId = userId;
	}
	deleteUser(userId: number) {
		this.userService.deleteUser(userId);
		location.reload();
	}

	getAllUsers() {
		this.userService.getAllUser().subscribe(
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
		let el = document.querySelectorAll("div[data-filter-selected]")[0];
		el.children[0].classList.replace("text-white", "text-gray-500");
		el.classList.remove("rounded-3xl");
		el.classList.remove("bg-red-600");
		el.removeAttribute("data-filter-selected");

		let element = event.currentTarget;
		element.children[0].classList.replace("text-gray-500", "text-white");
		element.classList.add("rounded-3xl");
		element.classList.add("bg-red-600");
		element.setAttribute("data-filter-selected", true);

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
