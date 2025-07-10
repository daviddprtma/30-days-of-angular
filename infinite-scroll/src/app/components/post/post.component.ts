import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input() post!: { title: string; body: string };
  randomPhotoUrl!: string;

  ngOnInit(): void {
    this.generateRandomPhoto();
  }

  private generateRandomPhoto(): void {
    const randomSeed = this.generateRandomNumberPhoto(100);
    this.randomPhotoUrl = `https://picsum.photos/seed/${randomSeed}/50`;
  }

  private generateRandomNumberPhoto(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
