import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Projeto } from '../../model/projetoModel';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projetos: Projeto[] = [
    new Projeto("Yelp Camp", "Um sistema CRUD completo para um site de divulgação e avaliação de acampamentos. Feito com ExpressJS, MongoDB e Bootstrap.", "/assets/yelp-camp.png"),
    new Projeto("Fox Brinquedos", "Um e-commerce de brinquedos feito em Laravel, utilizando Tailwind. Completo, com todas as operações e telas existentes num site de vendas.", "/assets/fox-brinquedos.png"),
    new Projeto("Laravel Blog", "Um blog feito em Laravel e Tailwind, possuindo todo o sistema para criação de posts, comentários, categorias e usuários.", "/assets/laravel-blog.png"),
    new Projeto("Divide aê!", "Uma calculadora feita para dividir contas! Seja de mercado, bares ou restaurantes, essa calculadora acabará com as suas dores de cabeça na hora da divisão!", "/assets/divide-ae.png"),
    new Projeto("Charlie Streetwear", "Um sistema de gerenciamento de estoque para uma loja de roupas, com o CRUD inteiro para produtos, categorias e admins, feito em Bootstrap e PHP.", "/assets/yelp-camp.png"),
    new Projeto("Pokedex Angular", "Uma simples calculadora usando os conceitos base de Angular e tailwind.", "/assets/pokedex-angular.png"),
    new Projeto("Spa do Pet", "Landing page de um comércio local, um banho e tosa, feito com HTML, CSS, Javascript e Bootstrap.", "/assets/spa-do-pet.png"),
    new Projeto("Pizzaria Novais", "Projeto acadêmico feito com CSS e HTML, com foco na aprendizagem da responsividade.", "/assets/pizzaria-novais.png"),
    new Projeto("CI Autoconhecimento", "Um projeto interno de aulas para autoconhecimento, com dinâmicas lúdicas e diferenciadas.", "/assets/ci-autoconhecimento.png"),
  ]
}
