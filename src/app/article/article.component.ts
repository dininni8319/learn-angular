import { Component, Input } from '@angular/core';
import { Article } from './article.module'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
 @Input() article: Article = { 
    title: '', 
    link: '', 
    vote: 0, 
    voteUp() {},
    voteDown() {},
    domain() {
      return ''
    }
  }
 
  constructor(){}

  voteUp() {
    this.article.voteUp()
  }
  
  voteDown() {
    this.article.voteDown()
  }
}
