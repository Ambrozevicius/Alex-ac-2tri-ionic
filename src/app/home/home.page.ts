import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  mes1 = 0
  mes2 = 0
  mes3 = 0
  media = 0

  abacaxi = false
  maca = false
  uva = false
  banana = false
  melancia = false


  mediameses() {
    this.media = (this.mes1 + this.mes2 + this.mes3) / 3

    if (this.media <= 20) {
      this.abacaxi = false
      this.maca = true
      this.uva = false
      this.banana = false
      this.melancia = true
    }
console.log(this.melancia, this.melancia, this.media)
  }
}
