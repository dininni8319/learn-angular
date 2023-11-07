import { Component } from '@angular/core';
import { Article } from './article/article.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] 

  constructor(){
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 8),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement, event: MouseEvent) {
    event.preventDefault()

    this.articles.push(
      new Article(
        title.value, 
        link.value
      )
    )

    title.value = ''
    link.value = ''
  }
  sortedArticle(): Article[] {
    return this.articles.sort(
      (a: Article, b: Article) => b.vote -a.vote
    )
  }
}
