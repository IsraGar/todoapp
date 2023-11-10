import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola desde todoapp';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ];
  name = 'Isra';
  age = 27;
  disabled = true;
  img = 'https://images.pexels.com/photos/18900657/pexels-photo-18900657/free-photo-of-luz-de-la-manana-en-la-puerta-de-brandenburgo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  person = {
    name: 'Isra',
    age: 27,
    img: 'https://images.pexels.com/photos/18900657/pexels-photo-18900657/free-photo-of-luz-de-la-manana-en-la-puerta-de-brandenburgo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  };
}
