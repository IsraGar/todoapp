import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from "../../models/task.model";
import { ReactiveFormsModule, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar Angular CLI',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    }
  ]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  changeHandler(){
    if(this.newTaskCtrl.valid && this.newTaskCtrl.value.trim() !== ''){
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('');
    }else{
      this.newTaskCtrl.setValue('');
    } 
  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };
    this.tasks.update((tasks)=> [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => {
      tasks.splice(index, 1);
      return tasks;
    });
  }

  updateTask(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if(position === index){
          return {
            ...task,
            completed: !task.completed
          }
        }
          return task;
        })    
    })
    console.log(this.tasks());
  }

  updateTaskEditingMode(index: number){
    if (this.tasks()[index].completed) return;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if(position === index){
          return {
            ...task,
            editing: true
          }
        }
          return {
            ...task,
            editing: false
          }
        })    
    })
  }

  updateTaskText(index: number, event: Event){
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if(position === index){
          return {
            ...task,
            title: input.value,
            editing: false
          }
        }
          return task
        })    
    })
  }
  
}
