import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SobreMimComponent } from '../sobre-mim/sobre-mim.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SobreMimComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
