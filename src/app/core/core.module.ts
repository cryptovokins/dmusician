import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRepoService } from './repositories';
import { SwarmDataSource } from './datasources';

@NgModule({
    imports: [ CommonModule ],
    providers: [
        SessionRepoService,
        SwarmDataSource
    ]
})
export class CoreModule {}
