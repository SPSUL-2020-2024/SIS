import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title:string = 'sis2';
  logged:boolean = false;

  changelogged(to:boolean){
    this.logged = to;
  }
}
