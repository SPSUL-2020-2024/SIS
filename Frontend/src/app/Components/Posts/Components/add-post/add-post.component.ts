import { Component, OnInit } from '@angular/core';
import {PostService} from "../../Service/post.service";
import {CenterModel} from "../../models/center.model";
import {PriorityModel} from "../../models/priority.model";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent implements OnInit {
  centers: CenterModel[] = []
  priorities: PriorityModel[] = []

  constructor(private postService:PostService) { }


  ngOnInit(): void {
    this.postService.getCenters().subscribe(
      res => {
        this.centers = res
      }
    )
    this.postService.getPriorities().subscribe(
      res => {
        this.priorities = res
      }
    )
  }

  visible = false;

  open(): void {
    this.visible = true;
    console.log(this.centers)
    console.log(this.priorities)

  }

  close(): void {
    this.visible = false;
  }
}
