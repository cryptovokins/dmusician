import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwarmDataSource } from './datasources';
import { SessionRepoService, SongsRepoService, CoversRepoService } from './repositories';
import { BannersRepoService } from './repositories/banners.service';


@NgModule({
    imports: [ CommonModule ],
    providers: [
        SessionRepoService,
        SwarmDataSource,
        SongsRepoService,
        CoversRepoService,
        BannersRepoService
    ]
})
export class CoreModule {}
