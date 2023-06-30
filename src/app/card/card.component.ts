import {Component} from '@angular/core';
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
export class CardComponent {
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
