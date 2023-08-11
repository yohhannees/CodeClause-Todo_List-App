import { Component } from '@angular/core';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = '';
  newTaskText: string = '';
  tasks: Task[] = [];

  addTask() {
    const taskText = this.newTaskText.trim();
    if (taskText !== '') {
      this.tasks.push({ text: taskText, completed: false });
      this.newTaskText = '';
    }
  }

  completeTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter(task => !task.completed);
  }
 
clearAllTasks() {
  this.tasks = [];

}


  searchTasks() {
    const searchText = this.searchText.toLowerCase();
  
  }

  get filteredTasks(): Task[] {
    if (this.searchText === '') {
      return this.tasks;
    } else {
      return this.tasks.filter(task =>
        task.text.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
