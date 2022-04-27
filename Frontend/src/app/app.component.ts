import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {toBoolean} from "ng-zorro-antd/core/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sis2';
  withoutOverlay = ["/login", "/payment_required"]

  constructor(public router:Router) {
  }

}
