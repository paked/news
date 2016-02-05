import {Component} from 'angular2/core';
import {Article} from './article';

@Component({
  selector: 'hs-article',
  template: `
    <h2>{{article.title}}</h2>
    <p>{{article.content}}</p>
    <p>by {{article.author}}</p>
  `,
  inputs: ['article']
})

export class ArticleComponent {
  public article: Article;
}
