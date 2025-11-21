import { Component, OnInit } from '@angular/core';
import { FichaPersonaje } from '../ficha-personaje/ficha-personaje';
import { Personaje } from '../models/Personaje.model';

@Component({
  selector: 'app-lista-personajes',
  imports: [FichaPersonaje],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes {
   personajes = [
    {
      nombre: "Aragorn",
      raza: "Humano",
      poder: 4,
      imagen: "https://i.imgur.com/UM2WQQg.jpeg"
    },
    {
      nombre: "Legolas",
      raza: "Elfo",
      poder: 5,
      imagen: "https://i.imgur.com/K9b9P6t.jpeg"
    },
    {
      nombre: "Gimli",
      raza: "Enano",
      poder: 3,
      imagen: "https://i.imgur.com/YpIbHjE.jpeg"
    },
    {
      nombre: "Gandalf",
      raza: "Mago",
      poder: 5,
      imagen: "https://i.imgur.com/PSq4csM.jpeg"
    },
    {
      nombre: "Frodo",
      raza: "Hobbit",
      poder: 2,
      imagen: "https://i.imgur.com/MwoQYtW.jpeg"
    }
  ];

}

