import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Images } from '../../../entities/images';
import { ThrowStmt } from '@angular/compiler';

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

    public onMoveLeft() {
        this.moveLeft.emit();
    }

    public onMoveRight() {
        this.moveRight.emit();
    }
}
