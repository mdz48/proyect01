import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './component/main/main.component';

@Component({ //Metaprogramación
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  text = 'Hola mundo!';
  // Buenas practicas para crear estructuras de carpetas para angular INVESTIGAR en libreta MAÑANA

    saludar() {
      if (this.text == 'Hola mundo!') {
        this.text = 'Nuevo Texto'
      } else {
        this.text = 'Hola mundo!'
      }
    }
}
