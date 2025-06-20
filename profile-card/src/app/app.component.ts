import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name: string = '';
  age: number = 0;
  description: string = '';

  saveData(){
    const profileData = {
      name: this.name,
      age: this.age,
      description: this.description
    };
    console.log('Profile data saved:', profileData);
  }
}
