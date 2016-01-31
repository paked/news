import {Component} from 'angular2/core';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

@Component({
  selector: 'my-article',
  template: `<h1>Articles</h1>
  <ul>
    <li *ngFor="#article of articles">
      <h2>{{article.title}}</h2>
      <p>{{article.content}}</p>
      <p>by {{article.author}}</p>
    </li>
  </ul>
    `
})

export class AppComponent {
  public articles = ARTICLES;
}

var ARTICLES: Article[] = [
  {
    id: 0,
    title: 'Meerkat Caught Walking Alone',
    content: 'Authorities have been shocked to find a lone Meerkat walking among the suburb of Harrison in Canberra. When asked what he was doing, "Zoo." was the only reply.',
    author: 'Barty'
  },
  {
    id: 1,
    title: 'Is TS Viable Now That ES6 Exists?',
    content: 'It is called TypeScript, not ClassScript for a reason.',
    author: 'McFly'
  },
  {
    id: 2,
    title: 'Key'
    content: 'They don\'t want you to succeed. They don\'t want you to win.',
    author: 'K.'
  }
];
