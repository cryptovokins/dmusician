import { Component, OnInit } from '@angular/core';

import { SessionRepoService, SongsRepoService } from '../core';
import { Song } from '../entities';

@Component({
  selector: 'app-home-player',
  templateUrl: './home-player.component.html',
  styleUrls: ['./home-player.component.css']
})
export class HomePlayerComponent implements OnInit {

  public songs: Song[] = [];
  public currentSong: Song = null;

  constructor(
    private sessionRepo: SessionRepoService,
    private songsRepo: SongsRepoService
  ) { }

  ngOnInit() {
    console.log(this.sessionRepo.getId());
    this.songs = this.songsRepo.getSongs();
    this.currentSong = this.songsRepo.getCurrentSong();
  }

}
