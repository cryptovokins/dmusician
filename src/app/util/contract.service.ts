import { Injectable } from '@angular/core';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private tokenInstance: any
  private accounts: string[];
  private userAccount: string;
  private addressCompany = '0xA5d4056EeE9e094304d65756E2EEDAe4Cf47679F'

  constructor(private web3Service: Web3Service) {
    this.initService()
  }
  private async  initService() {
    this.tokenInstance = await this.web3Service.getInstanceToken();
    this.accounts = await this.web3Service.refreshAccounts();
    this.userAccount = this.accounts[0]
  }

  async buySong(weis) {
   
    let weisToAuthor = weis * 0.9;
    let weisToDmusic = weis * 0.1;
    return await this.tokenInstance.buySong(weisToAuthor, weisToDmusic, {
      from: this.userAccount,
      value: weis,
      gas: 500000
    })
  }

  async clickAdvertisement(weis) {
    return await this.tokenInstance.clickAdvertisement( this.userAccount, weis , {
      from: this.addressCompany,
      gas: 50000
    });;
  }
  async foundMyContract(weis) {
    return await this.tokenInstance.foundMyContract(weis, {
      from: this.userAccount,
      value: weis,
      gas: 500000
    })
  }
}

