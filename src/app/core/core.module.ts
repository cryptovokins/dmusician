import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRepoService } from './repositories';

@NgModule({
    imports: [ CommonModule ],
    providers: [
        SessionRepoService
    ]
})
export class CoreModule {}