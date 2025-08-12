import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Emoji } from '../../models/emoji.model';
import { EmojiService } from '../../services/emoji.service';

@Component({
  selector: 'app-emoji-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emoji-search.component.html',
  styleUrl: './emoji-search.component.scss',
})
export class EmojiSearchComponent implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = '';
  emojis: Emoji[] = [];
  filteredEmojis: Emoji[] = [];
  categories: string[] = [];
  clipboard: string | null = null;

  constructor(private emojiService: EmojiService) {}

  ngOnInit(): void {
    this.emojiService.getEmojis().subscribe((emojis) => {
      this.emojis = emojis;
      this.filteredEmojis = emojis;
      this.categories = this.emojiService.getCategories(emojis);
    });
  }

  filterEmoji(): void {
    this.filteredEmojis = [];
    for (let emoji of this.emojis) {
      const isSearchMatch = emoji.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      let isCategoryMatch = true;

      if (this.selectedCategory) {
        if (emoji.category !== this.selectedCategory) {
          isCategoryMatch = false;
        }
      }

      if (isSearchMatch && isCategoryMatch) {
        this.filteredEmojis.push(emoji);
      }
    }
  }

  onCategoryChange(): void {
    this.filterEmoji();
  }

  copyToClipboard(symbol: string): void {
    navigator.clipboard.writeText(symbol);
    this.clipboard = `Copied ${symbol} to clipboard`;
    setTimeout(() => {
      this.clipboard = null;
    }, 3000);
  }
}
