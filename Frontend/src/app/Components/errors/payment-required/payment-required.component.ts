import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-required',
  templateUrl: './payment-required.component.html',
  styleUrls: ['./payment-required.component.sass']
})
export class PaymentRequiredComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(["/login"])

  }

}
