import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  @Output() logged = new EventEmitter<boolean>();

  changelogged(){
    this.logged.emit(true)
  }

  ngOnInit(): void {
  }

}
