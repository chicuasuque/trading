// cursos.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})

export class Cursos {
  agregarAlCarrito(curso: string, precio: number) {
    // Obtener carrito actual
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    
    // Agregar nuevo curso
    carrito.push({ curso, precio });
    
    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    alert(`${curso} agregado al carrito`);
  }
  cursoAbierto: number | null = null;

toggleInfo(id: number): void {
  this.cursoAbierto = this.cursoAbierto === id ? null : id;
}
}