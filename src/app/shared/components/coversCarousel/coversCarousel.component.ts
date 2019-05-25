import { Component, Input } from '@angular/core';

import { Images } from '../../../entities/images';

@Component({
    selector: 'covers-carousel',
    templateUrl: './coversCarousel.component.html',
    styleUrls: ['./coversCarousel.component.css']
})
export class CoversCarouselComponent {

    @Input()
    public covers: Images[]
}
