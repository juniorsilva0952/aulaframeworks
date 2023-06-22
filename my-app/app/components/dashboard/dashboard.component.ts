import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { EquipeComponent } from '../equipe/equipe.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }
tasks = [];
equipe=[];

  addTask(){
    console.log('add task');

    this.router.navigateByUrl('/task',{ 
      state: this.tasks,
    }).catch
    console.log('Erro ao navegar para a página de task');
  }

  addEquipe(){
    console.log('add equipe');

    this.router.navigateByUrl('/equipe',{ 
      state: this.equipe,
    }).catch
    console.log('Erro ao navegar para a página de equipe');
  }

}
