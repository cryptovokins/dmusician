import { ElementRef, Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { Song } from '../../../entities';


@Component({
    selector: 'audio-player',
    templateUrl: './audioPlayer.component.html',
    styleUrls: ['./audioPlayer.component.css']
})
export class AudioPlayerComponent implements OnInit {
    
    @Input()
    public song: Song = null

    @Output()
    public nextSong: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    public prevSong: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('player', {read: ElementRef})
    public playerElementRef: ElementRef;

    @Input()
    public pause: boolean = true

    private player: HTMLElement

    ngOnInit(): void { 
        this.player = this.playerElementRef.nativeElement;
        this.player.onended = this.requestNextSong.bind(this);
    }

    public requestNextSong(): void {
        this.nextSong.emit();
    }

    public requestPrevSong(): void {
        this.prevSong.emit();
    }

    public playPause(): void {
        this.pause = !this.pause;
        if (this.pause) {
            (this.player as any).pause();
        } else {
            (this.player as any).play();
        }
    }
}
