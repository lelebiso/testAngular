import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testb';

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }
  onClick(event: Event) {
    this.title = 'ho cliccato sul bottone'
  }
  
}
