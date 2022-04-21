import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-overlay',
  templateUrl: './menu-overlay.component.html',
  styleUrls: ['./menu-overlay.component.sass']
})
export class MenuOverlayComponent implements OnInit {

  constructor() { }
  userRole:number = 0;

  logout(){
    localStorage.clear();
    location.reload();
  }

  ngOnInit(): void {
   this.userRole = JSON.parse(localStorage.getItem('userData')!)[0].roleID
  }

}
