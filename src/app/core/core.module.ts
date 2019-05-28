import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwarmDataSource } from './datasources';
import { SessionRepoService, SongsRepoService, CoversRepoService } from './repositories';
import { BannersRepoService } from './repositories/banners.service';
import { Web3Service } from './repositories/web3.service';
import { UportService } from './repositories/uport.service';
import { ContractService } from './repositories/contract.service';


@NgModule({
    imports: [ CommonModule ],
    providers: [
        Web3Service,
        SessionRepoService,
        SwarmDataSource,
        SongsRepoService,
        CoversRepoService,
        BannersRepoService,
        UportService,
        ContractService
    ]
})
export class CoreModule {}
