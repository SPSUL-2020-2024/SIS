import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.sass']
})
export class AllUsersComponent implements OnInit {

  poleUzivatelu:any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://spsul-sis.mvahouse.cz/api/getAllUsers')
    .subscribe(Response => {
      console.log(Response)
      Object.entries(Response).forEach(
        ([key, value]) => this.poleUzivatelu.push(value)
      );
    }); 
  }

}
