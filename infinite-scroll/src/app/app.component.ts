import { Component } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
