import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    // Trim whitespace and check if the new task is not empty
    this.newTask = this.newTask.trim();
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
    // save data to localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks(): string[] {
    // Retrieve tasks from localStorage if available
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    return this.tasks;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    // Update localStorage after removing a task
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
