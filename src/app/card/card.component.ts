import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'cardComponent',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent implements OnInit{
  immagine = ''
  immagine1 = 'https://www.bing.com/th?id=OAIP.44141d8dbac9a1485e7923fb8977577b&pid=AdsNative&c=3&w=300&h=157&dynsize=1'
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  ngOnInit(): void {
    console.log("ngoninit")
    let counter = 0
    setInterval(()=>{
      if(counter%2 == 0){
        this.immagine = this.immagine1
      }else{
        this.immagine = this.immagine2
      }
      counter++
    }, 1000)
  }
  
cani = [
  {nome : 'rogero',
  razza : 'golden',
  descrizione : `The golden is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.` 
  },
  {nome : 'rex',
  razza : 'pastore',
  descrizione : `The pastote is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.` 
  },
  {nome : 'fuffy',
  razza : 'pitbull',
  descrizione : `The pitbull is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.` 
  }
]

  nomecane = 'roger'

}
