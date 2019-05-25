import { Component, OnInit } from '@angular/core';

import { SessionRepoService } from '../core';

@Component({
  selector: 'app-home-player',
  templateUrl: './home-player.component.html',
  styleUrls: ['./home-player.component.css']
})
export class HomePlayerComponent implements OnInit {

  constructor(
    private sessionRepo: SessionRepoService
  ) { }

  ngOnInit() {
    console.log(this.sessionRepo.getId());
  }

}
