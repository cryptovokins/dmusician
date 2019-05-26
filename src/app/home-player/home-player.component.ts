import { Component, OnInit } from '@angular/core';
import { ContractService } from '../util/contract.service';

import { SessionRepoService, SongsRepoService } from '../core';
import { Song } from '../entities';
import { BannersRepoService } from '../core/repositories/banners.service';

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
  public ads = [];

  private lengthCovers = 4;
  private indexCovers = 0;

  constructor(
    private contractService:ContractService,
    private sessionRepo: SessionRepoService,
    private songsRepo: SongsRepoService,
    private bannerRepo: BannersRepoService
  ) { }

  ngOnInit() {
    console.log(this.sessionRepo.getId());
    this.songs = this.songsRepo.getSongs();
    this.currentSong = this.songsRepo.getCurrentSong();
<<<<<<< HEAD
=======
    this.channelCovers.next(this.coversRepo.getCovers(this.indexCovers,this.lengthCovers));
>>>>>>> af41f5055b54be50150ac5ed5539ab683b7a0352
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

  getMeAd(startIndex: number, length: number) {
    return this.bannerRepo.getBanners(startIndex, length);
  }
  
  moveCoversleft() {
    let provIndex = this.indexCovers -1;
    let coversArray = this.coversRepo.getCovers(provIndex, this.lengthCovers);

    if(coversArray) {
      this.channelCovers.next(coversArray);
      this.indexCovers = provIndex;
    }
  }

  moveCoversRight() {
    let provIndex = this.indexCovers + 1;
    let coversArray = this.coversRepo.getCovers(provIndex, this.lengthCovers);

    if(coversArray) {
      this.channelCovers.next(coversArray);
      this.indexCovers = provIndex;
    }
  }
}
