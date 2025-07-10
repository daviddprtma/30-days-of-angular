import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  loading = false;
  page = 1;
  limit = 10;
  errorMsg = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private handleError(error: any): void {
    console.error('An error occurred:', error);
    this.errorMsg = 'An error occurred while loading posts';
  }

  loadPosts(): void {
    this.loading = true;
    this.postService.getPosts(this.page, this.limit).subscribe({
      next: (newPosts) => {
        if (newPosts && newPosts.length > 0) {
          this.posts = [...this.posts, ...newPosts];
          this.page++;
          this.errorMsg = '';
        }
      },
      error: (error) => {
        this.handleError(error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight - 100;

    if (scrollPosition >= threshold && !this.loading) {
      this.loadPosts();
      console.log('Loading more posts...');
    }
  }
}
