import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emoji } from '../models/emoji.model';

@Injectable({
  providedIn: 'root',
})
export class EmojiService {
  private emojiUrl = 'assets/emojis.json';
  constructor(private http: HttpClient) {}

  getEmojis(): Observable<Emoji[]> {
    return this.http.get<Emoji[]>(this.emojiUrl);
  }

  getCategories(emojis: Emoji[]): string[] {
    return Array.from(new Set(emojis.map((emoji) => emoji.category)));
  }
}
