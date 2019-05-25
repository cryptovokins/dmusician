import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwarmDataSource } from './datasources';
import { SessionRepoService, SongsRepoService, CoversRepoService } from './repositories';


@NgModule({
    imports: [ CommonModule ],
    providers: [
        SessionRepoService,
        SwarmDataSource,
        SongsRepoService,
        CoversRepoService
    ]
})
export class CoreModule {}
