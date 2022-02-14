import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent implements OnInit {

  polePrispevku:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
            this.totalAngularPackages = data.total;
        })
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
    this.polePrispevku.push("test");
  }
}