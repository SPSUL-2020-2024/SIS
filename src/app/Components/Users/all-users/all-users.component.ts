import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../Services/user-service.service";
import {UserModel} from "../Models/User.model";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.sass']
})
export class AllUsersComponent implements OnInit {

  Users?:UserModel[];
  constructor(private UserService: UserServiceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.UserService.getAllUser().subscribe(Response => {
      this.Users = Response;
      //this.Users = JSON.parse(Response);
    });

  }

}
