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
  center = 0;
  constructor(private UserService: UserServiceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.UserService.getAllUser().subscribe(Response => {
      this.Users = Response;
    });

  }
  updateCenter(center:number, event:any){
    let el = document.getElementsByClassName("bg-blue-500")[0];
    el.children[0].classList.replace("text-white","text-gray-500")
    el.classList.remove("rounded-3xl")
    el.classList.remove("bg-blue-500")

    let element = event.currentTarget;
    element.children[0].classList.replace("text-gray-500","text-white")
    element.classList.add("rounded-3xl")
    element.classList.add("bg-blue-500")

    this.center = center
  }
  search(){
    if(this.searchText == ""){
      this.getAllUsers();
    }else{
      this.Users = this.Users?.filter(res=>{
        return res.lname.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()) ||res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
      })
    }
  }
}