import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone:true,
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
cursosSeleccionados: { nombre: string; precio: number }[] = [];

  agregarCursoSimple(valor: string) {
    if (!valor) {
      alert('Por favor selecciona un curso');
      return;
    }

    let curso = null;
    
    switch(valor) {
      case 'modulo1':
        curso = { nombre: 'Módulo 1 - Introducción', precio: 50000 };
        break;
      case 'modulo2':
        curso = { nombre: 'Módulo 2 - Bases Fundamentales', precio: 80000 };
        break;
      case 'modulo3':
        curso = { nombre: 'Módulo 3 - Estrategias', precio: 100000 };
        break;
    }

    if (curso) {
      this.cursosSeleccionados.push(curso);
      alert('Curso agregado al carrito');
    }
  }

  calcularTotal(): number {
    return this.cursosSeleccionados.reduce((total, curso) => total + curso.precio, 0);
  }

  
}
