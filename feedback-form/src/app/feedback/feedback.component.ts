import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  feedback = {
    name: '',
    feedback: '',
  };

  submitted = false;

  onSubmit(form: any) {
    if (!form.valid) return;
    this.submitted = true;
    console.log('Feedback submitted:', this.feedback);
  }
}
