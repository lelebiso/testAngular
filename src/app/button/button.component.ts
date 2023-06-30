import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [MatButtonModule]
})
export class ButtonComponent implements OnInit{
  isDisabled = true

  ngOnInit(): void {
    console.log("ngOnInit")
    setInterval(()=>{
      this.isDisabled = !this.isDisabled
    }, 2000)
  }
}
