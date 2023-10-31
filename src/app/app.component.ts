import { Component } from '@angular/core';

interface IArticle {
  title: string 
  link: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articleArray: IArticle[]= []; 
  newArticle = { title: '', link: ''}

  addArticle(title: string, link: string, event: MouseEvent) {
    event.preventDefault()
    this.newArticle.title = title
    this.newArticle.link = link

    this.articleArray.push(this.newArticle)
  }
}
