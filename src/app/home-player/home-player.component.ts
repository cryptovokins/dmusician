import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContractService } from '../core/repositories/contract.service';
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

  foundAmount = 0;
  public songs: Song[] = [];
  public currentSong: Song = null;
  public ads = [];
  public channelCovers: BehaviorSubject<Images[]> = new BehaviorSubject<Images[]>([]);
  public channelMusic: BehaviorSubject<Song>;

  public columnBannersOne: Images[] = [];
  public columnBannersTwo: Images[] = [];

  public stopPlaying: boolean = false;

  public loading: boolean = true;

  private lengthCovers = 4;
  private indexCovers = 0;

 
  public logo: string = 'assets/dmusic-logo.png';
  constructor(
    private contractService: ContractService,
    private sessionRepo: SessionRepoService,
    private songsRepo: SongsRepoService,
    private coversRepo: CoversRepoService,
    private bannersRepo: BannersRepoService
  ) { }

  ngOnInit() {
    console.log(this.sessionRepo.getId());
    this.songs = this.songsRepo.getSongs();
    this.channelMusic = new BehaviorSubject<Song>(this.songsRepo.getCurrentSong());
    this.channelCovers.next(this.coversRepo.getCovers(this.indexCovers, this.lengthCovers));
    this.columnBannersOne = [...this.bannersRepo.getBanners(0, 4)];
    this.columnBannersTwo = [...this.bannersRepo.getBanners(4, 4)];
    this.stopPlaying = false;
    this.loading = false;
  }

  async play() {
    return await this.contractService.buySong(); 
  }

  async clickAdvertisment() {
    try {
      await this.contractService.clickAdvertisement()

    } catch (error) {
      console.log(error)
    }
  }

  moveCoversleft() {
    let provIndex = this.indexCovers - 1;
    let coversArray = this.coversRepo.getCovers(provIndex, this.lengthCovers);

    if (coversArray) {
      this.channelCovers.next(coversArray);
      this.indexCovers = provIndex;
    }
  }

  moveCoversRight() {
    let provIndex = this.indexCovers + 1;
    let coversArray = this.coversRepo.getCovers(provIndex, this.lengthCovers);

    if (coversArray) {
      this.channelCovers.next(coversArray);
      this.indexCovers = provIndex;
    }
  }

  async playNextSong() {
    let provSong = this.songsRepo.getNextSong();
    this.loading = true;
    try {

      if (provSong) {
        await this.play()
        console.log('Song to play: ', provSong);
        this.stopPlaying = false;
        this.loading = false;
        this.channelMusic.next(provSong)
      }

    } catch (error) {
      console.error(error);
      this.stopPlaying = true;
      this.loading = false;
    }
  }

  async playPrevSong() {

    let provSong = this.songsRepo.getPrevSong();
    this.loading = true;
    try {
      if (provSong) {
        await this.play()
        this.stopPlaying = false;
        this.loading = false;
        this.channelMusic.next(provSong);
      }

    } catch (error) {
      console.error(error);
      this.stopPlaying = true;
      this.loading = false;
    }
  }

   
}
