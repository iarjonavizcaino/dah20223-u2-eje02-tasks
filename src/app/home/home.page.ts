import { TasksService } from './../services/tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tasks: string[];
  public task: string;

  constructor(private taskService:TasksService) {
   this.tasks = this.taskService.getTasks();
   this.task = "algo";
  }

  public addTask() {
    this.taskService.addTask(this.task);
    this.tasks=this.taskService.getTasks();
    console.log(this.tasks);
    this.task="";
  }

  public removeTask(pos:number) {
    this.taskService.removeTask(pos);
    this.tasks = this.taskService.getTasks();
  }

}
