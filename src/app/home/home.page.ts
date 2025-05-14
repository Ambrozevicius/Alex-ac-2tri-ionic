import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  mes1 = 0;
  mes2 = 0;
  mes3 = 0;
  mes4 = 0;
  media = 0;

  maca = false;
  banana = false;
  pessego = false;
  manga = false;
  abacaxi = false;
  melancia = false;
  limao = false;
  morango = false;

  mediameses() {



    this.media = (this.mes1 + this.mes2 + this.mes3 + this.mes4) / 4;

    this.maca = this.media >= 15 && this.media <= 22;
    this.banana = this.media >= 20 && this.media <= 35;
    this.pessego = this.media >= 18 && this.media <= 25;
    this.manga = this.media >= 20 && this.media <= 30;
    this.abacaxi = this.media >= 20 && this.media <= 30;
    this.melancia = this.media >= 25 && this.media <= 35;
    this.limao = this.media >= 15 && this.media <= 30;
    this.morango = this.media >= 15 && this.media <= 25;

    if (this.media < 15 || this.media > 35 ) {
      alert("infelizmente nenhuma fruta é compatível com esta temperatura 😖")
     }

    console.log(this.media,this.maca,this.banana, this.pessego, this.manga, this.abacaxi, this.melancia, this.limao, this.morango)
  }
}

