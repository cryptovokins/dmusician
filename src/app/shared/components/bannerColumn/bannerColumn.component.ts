import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Images } from '../../../entities';
@Component({
    selector: 'banner-column',
    templateUrl: './bannerColumn.component.html',
    styleUrls: ['./bannerColumn.component.css']
})
export class BannerColumnComponent {

    @Input()
    public banners: Images[] = [
        {
            id: 0,
            img:'/assets/banners/ban-epiclabs.jpg'
        },
        {
            id: 1,
            img:'/assets/banners/ban-ethereum.jpg'
        },
        {
            id: 2,
            img:'/assets/banners/ban-swarm.jpg'
        },
        {
            id: 3,
            img:'/assets/banners/ban-osw.jpg'
        }
    ]

    @Output()
    public bannerClicked: EventEmitter<number> = new EventEmitter<number>();


    public clickOnBanner (bannerId) {
        this.bannerClicked.emit(bannerId);
    }
    
}
