import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Images } from '../../../entities/images';

@Component({
    selector: 'covers-carousel',
    templateUrl: './coversCarousel.component.html',
    styleUrls: ['./coversCarousel.component.css']
})
export class CoversCarouselComponent {

    @Input()
    public covers: Images[];

    @Output()
    public moveLeft: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    public moveRight: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    public albumSelected: EventEmitter<number> = new EventEmitter<number>();

    public onMoveLeft() {
        this.moveLeft.emit();
    }

    public onMoveRight() {
        this.moveRight.emit();
    }

    public onSelectAlbum(id: number) {
        this.albumSelected.emit(id);
    }
}
