import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-carrera',
  imports: [CommonModule],
  templateUrl: './carrera.html',
  styleUrl: './carrera.css'
})
export class Carrera {
  movChibi1 = {transform:'translateY(100px)'};

  posX:number=0;
  posY:number=0;

  moverse() {
    
    

    this.posX += Math.floor(Math.random()*10)-5;
    this.posY += Math.floor(Math.random()*10)-5;

    console.log(this.posX + " " + this.posY)
    this.movChibi1 = {transform: 'translateX('+ this.posX}
  }
}