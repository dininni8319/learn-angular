import { Component, Input } from '@angular/core';

interface IArticle {
  title: string 
  link: string
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
 @Input() article: IArticle = { title: '', link: ''}

}
