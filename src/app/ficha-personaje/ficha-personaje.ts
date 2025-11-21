import { Component, Input } from '@angular/core';

type NewType = undefined;

@Component({
  selector: 'app-ficha-personaje',
  imports: [],
  templateUrl: './ficha-personaje.html',
  styleUrl: './ficha-personaje.css'
})
export class FichaPersonaje {
 @Input() personaje: any;

  getBackgroundColor() {
    switch (this.personaje.raza) {
      case "Humano": return "#e0e0ff";
      case "Elfo": return "#e0ffe0";
      case "Enano": return "#fff4d6";
      case "Mago": return "#ffe0ff";
      case "Hobbit": return "#f0ffe0";
      default: return "white";
    }
  }

  getStars(n: number) {
    return "★".repeat(n) + "☆".repeat(5 - n);
  }

}
