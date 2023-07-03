import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testb';
  isVisible= true;
  num = 3;
  string = "topolino";

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true, color: 'green'},
    {nome: "anna", cognome: "sorro", isOnline: true, color: 'pink'},
    {nome: "marco", cognome: "verdi", isOnline: false, color: 'blue'},
    {nome: "leonado", cognome: "neri", isOnline: true, color: 'yellow'},
    {nome: "sandro", cognome: "blu", isOnline: false, color: 'purple'},
  ]

  color = 'green';

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }
  onClick(event: Event) {
    this.title = 'ho cliccato sul bottone'
  }

  onClickData() {
    this.persone = [
      {nome: "123", cognome: "rossi", isOnline: true, color: 'green'},
      {nome: "sds", cognome: "sorro", isOnline: true, color: 'pink'},
      {nome: "qwqerty", cognome: "verdi", isOnline: false, color: 'blue'},
      {nome: ":)", cognome: "neri", isOnline: true, color: 'yellow'},
      {nome: "----", cognome: "blu", isOnline: false, color: 'purple'},
    ]  }
  
}
