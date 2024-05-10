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
    new Trajetoria(2022, 'The web developer bootcamp', 'Após essa interação, decidi seguir carreira na área da programação e fui fazer um curso online, do professor Colt Steele, na Udemy, onde tive minha primeira interação com programção web.'),
    new Trajetoria(2023, 'Connect Code', 'Em janeiro de 2023 eu comecei a minha jornada profissional, entrando como free-lancer na Connect Code, adquirindo muita experiência das tecnologias do mercado e da interação com os clientes.'),
    new Trajetoria(2023, 'Tecnólogo em Sistemas para Internet' , 'Em fevereiro eu comecei meu curso superior no Centro Universitário Senac, na Unidade de Santo Amaro, começando o curso Tecnólogo de Sistemas para Internet, onde comecei a descobrir ainda mais tecnologias.'),
    new Trajetoria(2024, 'CIT Senac', 'Junto do free-lancer, arrumei um estágio no Centro de Inovação e Tecnologia do Senac, onde pude me desenvolver com o trabalho em equipe e compartilhando conhecimentos com diversas pessoas.')
  ];

}
