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

  nextHref(){
    let paypalls = [
      {
        user: "Matej",
        href: "https://paypal.me/prysimamrictopenize?country.x=CZ&locale.x=cs_CZ"
      },{
        user: "Honza",
        href: "https://paypal.me/JanKopejtko?country.x=CZ&locale.x=cs_CZ"
      },{
        user: "Kryštof" ,
        href: "https://paypal.me/KrystofHanzl"
      }]


    let urls = paypalls[Math.floor(Math.random()*paypalls.length)].href;
    console.log(paypalls[Math.floor(Math.random()*paypalls.length)].href)
    window.open(urls, '_blank')!.focus();



  }

}
