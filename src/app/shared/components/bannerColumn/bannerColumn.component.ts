import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Banner } from '../../../entities';
@Component({
    selector: 'banner-column',
    templateUrl: './bannerColumn.component.html',
    styleUrls: ['./bannerColumn.component.css']
})
export class BannerColumnComponent {

    @Input()
    public banners: Banner[] = [
        {
            id: 0,
            img:'/assets/test-images/mev.jpg'
        },
        {
            id: 1,
            img:'/assets/test-images/Pib.jpeg'
        },
        {
            id: 2,
            img:'/assets/test-images/tentacle.png'
        },
        {
            id: 3,
            img:'/assets/test-images/vikings.jpg'
        }
    ]

    @Output()
    public bannerClicked: EventEmitter<number> = new EventEmitter<number>();


    private clickOnBanner (bannerId) {
        this.bannerClicked.emit(bannerId);
    }
    
}
