import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { LocalStorage } from '../services/local-storage';

@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, NgClass, CommonModule, MatSlideToggleModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit {
  esHalloween: boolean = false;
  nombre:string | null= "";

  constructor(private almacenamiento:LocalStorage) {

  }
  ngOnInit(){
    this.nombre = this.almacenamiento.getItem("nombre");
    this.esHalloween=this.almacenamiento.isHalloween();
  }
  cambiarHalloween() {
    if (this.esHalloween) {
      this.almacenamiento.onHalloween();
    } else {
      this.almacenamiento.offHalloween();
    }
  }

  

}
