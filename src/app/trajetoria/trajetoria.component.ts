import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Trajetoria } from '../../model/trajetoriaModel';

@Component({
  selector: 'app-trajetoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trajetoria.component.html',
  styleUrl: './trajetoria.component.css'
})
export class TrajetoriaComponent {

  contagem: number = 0;

  trajetorias: Trajetoria[] = [
    new Trajetoria(2021, 'Introdução à Programação de Computadores', 'Comecei minha jornada no mundo da programação através do curso do Novotec Expresso, chamado de Introdução à programação de computadores, fornecido pela Etec de Taboão da Serra'),
    new Trajetoria(2022, 'The web developer bootcamp', ''),
    new Trajetoria(2023, 'Connect Code', ''),
    new Trajetoria(2023, 'Tecnólogo em Sistemas para Internet' , ''),
    new Trajetoria(2024, 'CIT Senac', '')
  ];

}
