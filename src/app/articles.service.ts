import {ARTICLES} from './mock-articles';
import {Injectable} from 'angular2/core';

@Injectable()
export class ArticlesService {
  getArticles() {
    return Promise.resolve(ARTICLES);
  }
}
