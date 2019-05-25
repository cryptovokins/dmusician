import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    SessionRepoService,
    SongsRepoService
} from './repositories';
import { SwarmDataSource } from './datasources';

@NgModule({
    imports: [ CommonModule ],
    providers: [
        SessionRepoService,
        SwarmDataSource,
        SongsRepoService
    ]
})
export class CoreModule {}
