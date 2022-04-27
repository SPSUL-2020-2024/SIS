import {Component, Inject, OnInit} from '@angular/core';
import {PostService} from "../../Service/post.service";
import {CenterModel} from "../../models/center.model";
import {PriorityModel} from "../../models/priority.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

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
  form: FormGroup;

  constructor(private fb: FormBuilder,private postService:PostService, @Inject(MAT_DIALOG_DATA) data:DialogData) {
    this.form = fb.group({
      Title: ["", Validators.required],
      Text: ["", Validators.required],
      Prioriry: ["", Validators.required],
      Center: ["",Validators.required]
    })
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
