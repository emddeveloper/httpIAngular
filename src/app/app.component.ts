import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wiki: WikipediaService) {}
  pages = {};
  searchEmit_f(value: string) {
    this.wiki.search(value).subscribe((response) => {
      this.pages = response;
    });
  }
}
