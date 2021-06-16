import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts =[
    {
      title: 'Tree',
      imageUrl: 'assets/card-app-pics/treeimg.jpg',
      username: 'nature',
      content: 'I like to look at trees'
    },

      {
        title: 'Mountains',
        imageUrl: 'assets/card-app-pics/mountainimg.jpg',
        username: 'mountainLove',
        content: 'Mountains are beautiful'
      },

        {
          title: 'Biking',
          imageUrl: 'assets/card-app-pics/bikingimg.jpg',
          username: 'cycling',
          content: 'I ride my bike daily'
        }
  ]
}
