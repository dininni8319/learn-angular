import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList = ["John", "Philip", "Antonio", "Marc", "Gregor"]

  addArticle(title: string, link: string) {

  }
}
