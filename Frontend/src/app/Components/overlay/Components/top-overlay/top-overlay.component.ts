import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../../Users/Services/user-service.service";

@Component({
  selector: 'app-top-overlay',
  templateUrl: './top-overlay.component.html',
  styleUrls: ['./top-overlay.component.sass']
})
export class TopOverlayComponent implements OnInit{
  userData = {
    name: "",
    lname: ""
  };
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.changeName();
  }

  changeName(){
    this.userData.name = JSON.parse(localStorage.getItem('userData')!)[0].name;
    this.userData.lname = JSON.parse(localStorage.getItem('userData')!)[0].lname;
    window.removeEventListener("storage", this.changeName, false);
  }

}
