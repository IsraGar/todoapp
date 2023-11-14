import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from "@angular/core";
import { ReactiveFormsModule, FormControl } from "@angular/forms";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola desde todoapp';
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]);
  name = signal('Isra');
  age = 27;
  disabled = true;
  img = 'https://images.pexels.com/photos/18900657/pexels-photo-18900657/free-photo-of-luz-de-la-manana-en-la-puerta-de-brandenburgo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';

  person = signal({
    name: 'Isra',
    age: 27,
    img: 'https://images.pexels.com/photos/18900657/pexels-photo-18900657/free-photo-of-luz-de-la-manana-en-la-puerta-de-brandenburgo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  });

  colorControl = new FormControl();

  constructor(){
    this.colorControl.valueChanges.subscribe((value) => {
      console.log(value);   
    })
  }

  clickHandler(){
    alert('Hola');
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        age: parseInt(newValue, 10)
      }
    })
  }
}
