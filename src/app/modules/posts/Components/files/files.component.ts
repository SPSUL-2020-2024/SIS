import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.sass']
})
export class FilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  files = [
    {
      name: "Inspekce 2022",
      viditelnost: "",
      link : "http://assets.spsul.cz/files/Inspek%C4%8Dn%C3%AD%20zpr%C3%A1va.pdf"
    },
    {
      name: "Výroční zpráva",
      viditelnost: "",
      link: "http://assets.spsul.cz/files/vyrocni_zprava_2021.pdf"
    },
    {
      name: "Maturitní otázky",
      viditelnost: "Skrytý soubor"
    }
  ]
}
