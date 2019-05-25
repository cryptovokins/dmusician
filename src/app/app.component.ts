import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private tags = ['Rock', 'Indy', 'Pop'];
  public title = 'DMusic';
  
  onTagFilter(tag) {
    console.log(tag);
  }
}

