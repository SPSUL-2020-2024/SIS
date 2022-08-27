import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-overlay',
  templateUrl: './menu-overlay.component.html',
  styleUrls: ['./menu-overlay.component.sass']
})
export class MenuOverlayComponent implements OnInit {

  constructor(private router:Router) { }
  userRole:number = 0;

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"])
  }

  ngOnInit(): void {
   this.userRole = JSON.parse(localStorage.getItem('userData')!)[0].roleID
  }

}
