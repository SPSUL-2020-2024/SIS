import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent implements OnInit {

  centers= [
    {
    "CenterId": 1,
    "Name" : "Stříbrníky"
    },
    {
    "CenterId": 2,
    "Name" : "Resslova"
    },
    {
    "CenterId": 3,
    "Name" : "Stříbrníky + Resslova"
    }]
  priorities= [
    {
      "id": 1,
      "Priority" : "Low"
    },
    {
      "id": 2,
      "Priority" : "Medium"
    },
    {
      "id": 3,
      "Priority" : "High"
    },]

  constructor() { }

  ngOnInit(): void {
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
