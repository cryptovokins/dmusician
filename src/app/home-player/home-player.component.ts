import { Component, OnInit } from '@angular/core';
import { ContractService } from '../util/contract.service';

import { SessionRepoService, SongsRepoService, CoversRepoService } from '../core';
import { BannersRepoService } from '../core/repositories/banners.service';
import { Song, Images } from '../entities';
import { BehaviorSubject } from 'rxjs';


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
  public channelCovers: BehaviorSubject<Images[]> = new BehaviorSubject<Images[]>([]);

  public columnBannersOne: Images[] = [];
  public columnBannersTwo: Images[] = [];

  private lengthCovers = 4;
  private indexCovers = 0;

  constructor(
    private contractService:ContractService,
    private sessionRepo: SessionRepoService,
    private songsRepo: SongsRepoService,
    private coversRepo: CoversRepoService,
    private bannersRepo: BannersRepoService
  ) { }

  ngOnInit() {
    console.log(this.sessionRepo.getId());
    this.songs = this.songsRepo.getSongs();
    this.currentSong = this.songsRepo.getCurrentSong();
    this.channelCovers.next(this.coversRepo.getCovers(this.indexCovers,this.lengthCovers));
    this.columnBannersOne = [...this.bannersRepo.getBanners(0, 4)];
    this.columnBannersTwo = [...this.bannersRepo.getBanners(4,4)];
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
