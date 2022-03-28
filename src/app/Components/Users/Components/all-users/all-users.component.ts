import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {UserServiceService} from "../../Services/user-service.service";
import {UserModel} from "../../Models/User.model";


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.sass']
})
export class AllUsersComponent implements OnInit {

  Users:UserModel[] = [];
  searchText: string = "";
  constructor(private UserService: UserServiceService) { }

  ngOnInit(): void {
    this.getAllUsers()
    console.log(this.Users)
    console.log(typeof this.Users)
  }

  getAllUsers(){
    this.UserService.getAllUser().subscribe(Response => {
      this.Users = Response;
      console.log(Response);
    });

  }

  search(){
    console.log(this.searchText)
    if(this.searchText == ""){
      this.getAllUsers();
    }else{
      this.Users = this.Users?.filter(res=>{
        return res.lname.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()) ||res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
      })
    }
  }

}
