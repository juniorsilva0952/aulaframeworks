
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/app/model/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  nome = new FormControl('');
  descricao = new FormControl('');
  responsavel = new FormControl('');
  dt_inicio = new FormControl('');
  dt_fim = new FormControl('');
 
  tasks: Task[] = []

  addTask(){
    const t = this.taskToObject();
    console.log(t);
    this.tasks.push(t)
//console.log(this.nome.value!;
// console.log(this.descricao.value!
// console.log(this.responsavel.value!;
// console.log(this.dt_inicio.value;
// console.log(this.dt_fim.value;
this.nome.setValue('');
this.descricao.setValue('');
this.responsavel.setValue('');
this.dt_inicio.setValue('');
this.dt_fim.setValue('');



  }
  taskToObject(){
  const t = new Task()

  t.nome = this.nome.value!;
  t.descricao = this.descricao.value!;
  t.responsavel = this.responsavel.value!;
  t.dt_inicio=Number(this.dt_inicio.value);
  t.dt_inicio=Number(this.dt_fim.value);
  return t;
  }

}
