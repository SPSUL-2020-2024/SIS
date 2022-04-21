import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {PostService} from "../../Service/post.service";

@Component({
	selector: "app-main-dashboard",
	templateUrl: "./main-dashboard.component.html",
	styleUrls: ["./main-dashboard.component.sass"],
})
export class MainDashboardComponent implements OnInit {
	polePrispevku: any[] = [];
	constructor(private postService:PostService) {}

	ngOnInit(): void {
		this.postService.getPosts().subscribe(
			Response => {
        this.polePrispevku = Response
      },
      error => {
        console.log("err " + error)
      }
		);
	}
}
