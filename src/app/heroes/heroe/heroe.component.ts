import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  nombre: string = 'Ironman';
  edad: number = 34;
  habilidad: string = 'Super Traje'

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerHabilidad(): string{
    return `${this.habilidad}`;
  }

  cambiarHeroe(): void{
    this.nombre = 'Deadpool';
    this.edad = 32;
  }
}
