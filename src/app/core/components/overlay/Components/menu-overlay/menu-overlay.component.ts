import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-menu-overlay",
	templateUrl: "./menu-overlay.component.html",
	styleUrls: ["./menu-overlay.component.sass"],
})
export class MenuOverlayComponent implements OnInit {
	constructor(private router: Router) {}
	userRole: number = 0;

	menuItems: any[] = [
		{
			label: "Příspěvky",
			href: "/",
			iconType: "appstore",
			requiredRole: 0,
		},
		{
			label: "Uživatelé",
			href: "/users",
			iconType: "team",
			requiredRole: 3,
		},
		// {
		// 	label: "Závady",
		// 	href: "/issues",
		// 	iconType: "tool",
		// 	requiredRole: 0,
		// },
		// {
		// 	label: "Soubory",
		// 	href: "/files",
		// 	iconType: "file",
		// 	requiredRole: 0,
		// },
	];
	menuLogout: any = {
		label: "Odhlásit se",
		href: "#",
		iconType: "logout",
		requiredRole: 0,
	};

	logout() {
		localStorage.clear();
		this.router.navigate(["/login"]);
	}

	ngOnInit(): void {
		this.userRole = JSON.parse(localStorage.getItem("userData")!)[0].role_id;
	}
}
