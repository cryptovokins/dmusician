import { Component, Input } from '@angular/core';
import { Song } from '../../../entities';

@Component({
    selector: 'songs-list',
    templateUrl: './songsList.component.html',
    styleUrls: ['./songsList.component.css']
})
export class SongsListComponent {

    @Input()
    public songs: Song[]

    @Input()
    public playing: Song;
}
