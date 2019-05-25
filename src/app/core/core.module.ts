import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    SongsRepoService
} from './repositories';
import { SwarmDataSource } from './datasources';
import { SessionRepoService, CoversRepoService } from './repositories';


@NgModule({
    imports: [ CommonModule ],
    providers: [
        SessionRepoService,
        SwarmDataSource,
        SongsRepoService
        CoversRepoService
    ]
})
export class CoreModule {}
