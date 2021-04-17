import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface wikiResponse {
  query: {
    search: {
      title: string;
      pageid: number;
      wordcount: number;
      snippet: string;
    };
  };
}
[];

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}
  search(term: string) {
    return this.http
      .get<wikiResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          srsearch: term,
          utf8: '1',
          format: 'json',
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
