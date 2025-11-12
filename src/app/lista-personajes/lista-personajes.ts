import { Component, OnInit } from '@angular/core';
import { FichaPersonaje } from '../ficha-personaje/ficha-personaje';
import { Personaje } from '../models/Personaje.model';

@Component({
  selector: 'app-lista-personajes',
  imports: [FichaPersonaje],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes implements OnInit {
  personajes: Personaje[] = [
    {nombre:"Armin Tanzarian", imagen: '/images/anubis.png', raza: "Viet-Kong", poder: "mucho"},
    {nombre:"sdas", imagen: "sdf", raza: "dasdas", poder: "dasdhfjkjk"},
    {nombre:"sdas", imagen: "sdf", raza: "dasdas", poder: "dasdhfjkjk"},
    {nombre:"sdas", imagen: "sdf", raza: "dasdas", poder: "dasdhfjkjk"}  
  ];
  ngOnInit(): void {

  }

}

