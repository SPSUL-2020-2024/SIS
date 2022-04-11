import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sis2';
  logged: boolean = false;

  changelogged(to:any){
    this.logged = to;
  }
}
