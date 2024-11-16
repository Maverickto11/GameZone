import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { ContenidoComponent } from "./contenido/contenido.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, ContenidoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Juego';

}
