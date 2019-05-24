import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DMusic';
  user = {
    name: '',
    age: ''
  };
  result: string = '';
  ethdata: any;
  accountInfo: any
  instructor: any;
  constructor() { }

  async ngOnInit() {
    
  }

  
 
}

