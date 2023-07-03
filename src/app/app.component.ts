import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testb';
  isVisible = true;
  num = 3;
  string = "topolino";

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "anna", cognome: "sorro", isOnline: true},
    {nome: "marco", cognome: "verdi", isOnline: false},
    {nome: "leonado", cognome: "neri", isOnline: true},
    {nome: "sandro", cognome: "blu", isOnline: false},
  ]

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }
  onClick(event: Event) {
    this.title = 'ho cliccato sul bottone'
  }
  
}
