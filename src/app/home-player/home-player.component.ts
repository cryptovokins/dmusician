import { Component, OnInit } from '@angular/core';
import { ContractService } from '../util/contract.service';

import { SessionRepoService, SongsRepoService } from '../core';
import { Song } from '../entities';

@Component({
  selector: 'app-home-player',
  templateUrl: './home-player.component.html',
  styleUrls: ['./home-player.component.css']
})
export class HomePlayerComponent implements OnInit {


  private weisToPlay =  1000000000000000;
  private weisToClick = 5000000000000000  ;
  foundAmount = 0;
  public songs: Song[] = [];
  public currentSong: Song = null;

  constructor(
    private contractService:ContractService,
    private sessionRepo: SessionRepoService,
    private songsRepo: SongsRepoService
  ) { }

  ngOnInit() {
    console.log(this.sessionRepo.getId());
    this.songs = this.songsRepo.getSongs();
    this.currentSong = this.songsRepo.getCurrentSong();
  }

  play(){
    this.contractService.buySong(this.weisToPlay)
  }
  clickAdvertisment(){
    this.contractService.clickAdvertisement(this.weisToClick)
  }
  foundMyCompany(){
    this.contractService.foundMyContract(this.foundAmount)
  }
}
