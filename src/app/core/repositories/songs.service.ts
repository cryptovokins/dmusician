import { Injectable } from '@angular/core';

import { SwarmDataSource } from '../datasources';
import { Song } from '../../entities';

@Injectable()
export class SongsRepoService {

    private playing: number = 0;

    constructor(
        private swarmDataSource: SwarmDataSource
    ) {}

    public getSongs(): Song[] {
        return this.swarmDataSource.getMusicTracks()
        .map((url: string, index: number) => ({
            id: index,
            title: `Track${index}`,
            time: '1:00',
            url: url
        }))
    }

    private getTotalSongs(): number {
        return this.swarmDataSource.getMusicTracks().length;
    }

    public getNextSong(): Song {
        let toPlay: Song = null;

        if (this.playing < this.getTotalSongs()) {
            toPlay = this.getSongs()[++this.playing];
        }

        return toPlay;
    }

    public getPrevSong(): Song {
        let toPlay: Song = null;
        
        if (this.playing > 0) {
            toPlay = this.getSongs[--this.playing];
        }

        return toPlay;
    }

    public getCurrentSong(): Song {
        return this.getSongs()[this.playing];
    }
}