import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss',
})
export class ThemePickerComponent {
  setTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }
}
