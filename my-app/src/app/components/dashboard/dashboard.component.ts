import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }
tasks = [];

  addTask(){
    console.log('add task');

    this.router.navigateByUrl('/task',{ 
      state: this.tasks,
    }).catch
    console.log('Erro ao navegar para a página de task');
  }

}
