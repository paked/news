import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {PreviewPipe} from './preview.pipe';
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticlesService} from './articles.service';

@Component({
  selector: 'hs-article-list',
  template: `
  <ul>
    <li *ngFor="#article of articles" (click)="onSelect(article)">
      <h3>{{article.title}}</h3>
      <p>{{article.content | preview: 10}}</p>
    </li>
  </ul>
  
  <div *ngIf="selectedArticle">
    <hs-article [article]="selectedArticle"></hs-article>
  </div>
    `,
  pipes: [PreviewPipe],
  directives: [ArticleComponent],
  providers: [ArticlesService]
})

export class AppComponent implements OnInit{
  public articles: Article[];
  public selectedArticle: Article;

  constructor(private _articlesService: ArticlesService) {}

  ngOnInit() {
    this._articlesService.getArticles().then(articles => this.articles = articles);
  }

  onSelect(article: Article) {
    this.selectedArticle = article;
  }
}
