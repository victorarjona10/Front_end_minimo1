import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMinimo1ConfianzaService } from '../../services/api-minimo1-confianza.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-confianza',
  imports: [FormsModule, CommonModule],
  templateUrl: './confianza.component.html',
  styleUrl: './confianza.component.css'
})
export class ConfianzaComponent {

  userId: string = '';
  confianza: number | null = null;
  nuevaConfianza: number = 0;
  mensaje: string = '';
  fecha: string | null = null; 
  
  constructor(private route: ActivatedRoute, private apiService: ApiMinimo1ConfianzaService) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    this.loadConfianza();
  }

    // Función para leer la confianza del usuario
    loadConfianza(): void {
      if (this.userId) {
        this.apiService.getConfianzaByUserId(this.userId).subscribe({
          next: (data: any) => {
            this.confianza = data.confianza || null;
            this.fecha = data.fecha || null; // Asigna la fecha si está disponible
            console.log(this.confianza);
          },
          error: () => {
            this.mensaje = 'No se pudo cargar la confianza.';
          }
        });
      }
    }
  

  // Función para crear una nueva confianza si no existe
  postearConfianza(): void {
    if (this.nuevaConfianza >= 0 && this.nuevaConfianza <= 10) {
      this.apiService.postConfianzaByUserId({ confianza: this.nuevaConfianza }).subscribe({
        next: () => {
          this.mensaje = 'Confianza creada exitosamente.';
          this.confianza = this.nuevaConfianza;
          this.nuevaConfianza = 0;
        },
        error: () => {
          this.mensaje = 'Error al crear la confianza.';
        }
      });
    } else {
      this.mensaje = 'Introduce un valor válido entre 0 y 10.';
    }
  }

  // Función para actualizar la confianza existente
  actualizarConfianza(): void {
    if (this.confianza !== null && this.nuevaConfianza >= 0 && this.nuevaConfianza <= 10) {
      this.apiService.updateConfianzaByUserId(this.userId, { confianza: this.nuevaConfianza }).subscribe({
        next: () => {
          this.mensaje = 'Confianza actualizada exitosamente.';
          this.confianza = this.nuevaConfianza;
          this.nuevaConfianza = 0;
        },
        error: () => {
          this.mensaje = 'Error al actualizar la confianza.';
        }
      });
    } else {
      this.mensaje = 'Introduce un valor válido entre 0 y 10.';
    }
  }

  // Función para eliminar la confianza
  eliminarConfianza(): void {
    if (this.confianza !== null) {
      this.apiService.deleteConfianzaByUserId(this.userId).subscribe({
        next: () => {
          this.mensaje = 'Confianza eliminada exitosamente.';
          this.confianza = null;
        },
        error: () => {
          this.mensaje = 'Error al eliminar la confianza.';
          
        }
      });
    } else {
      this.mensaje = 'No hay confianza para eliminar.';
    }
  }


}
