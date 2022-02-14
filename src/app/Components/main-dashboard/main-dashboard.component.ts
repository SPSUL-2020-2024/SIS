import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent implements OnInit {
  
  polePrispevku:any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://spsul-sis.mvahouse.cz/api/getAllPosts')
    .subscribe(Response => {
      console.log(Response)
      Object.entries(Response).forEach(
        ([key, value]) => this.polePrispevku.push(value)
      );
    }); 
  }
}