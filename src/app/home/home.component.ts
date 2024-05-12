import { Component } from '@angular/core';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SobreMimComponent } from '../sobre-mim/sobre-mim.component';
import { TrajetoriaComponent } from '../trajetoria/trajetoria.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SobreMimComponent, TrajetoriaComponent, HabilidadesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
