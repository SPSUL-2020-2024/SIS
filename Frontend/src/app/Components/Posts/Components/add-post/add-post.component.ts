import {Component, Inject, OnInit} from '@angular/core';
import {PostService} from "../../Service/post.service";
import {CenterModel} from "../../models/center.model";
import {PriorityModel} from "../../models/priority.model";
import {HttpClient} from "@angular/common/http";

class DialogData {
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent implements OnInit {
  centers: CenterModel[] = []
  priorities: PriorityModel[] = []
  Form = {
    TitleInput : "",
    TextInput : "",
    PriorityInput: 0,
    CenterInput: 0
  }

  constructor(private postService:PostService, private http:HttpClient) {
  }


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

  send():void{
    this.http
      .post("https://spsul-sis.mvahouse.cz/PostApi/createPost",this.Form).subscribe();
    location.reload();
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
