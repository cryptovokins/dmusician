import { Injectable } from '@angular/core';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private tokenInstance: any
  private accounts: string[];
  private userAccount: string;
  private addressCompany = '0x2912e467F43dda038bE780E09238b27a330aF5ea'
  private owner: string;
  constructor(private web3Service: Web3Service) {
    this.initService()
  }
  private async  initService() {
    this.tokenInstance = await this.web3Service.getInstanceToken();
    this.accounts = await this.web3Service.refreshAccounts();
    console
    this.userAccount = this.accounts[0]
    this.owner =  await this.tokenInstance.owner()
    console.log('owner:'+this.owner)
  }

  async buySong(weis) {

    let weisToAuthor = weis * 0.9;
    let weisToDmusic = weis * 0.1;
    try {
      return await this.tokenInstance.buySong(weisToAuthor, weisToDmusic, {
        from: this.userAccount,
        value: weis,
        gas: 500000
      });
    } catch (error) {
      console.log(error)
    }
  }

  async clickAdvertisement(weis) {
    try {

      
      return await this.tokenInstance.clickAdvertisement(this.userAccount, weis, {
        from: this.owner,
        gas: 50000
      })
    } catch (error) {
      console.log(error)
    }
  }
  async foundMyContract(weis) {
    try {
      return await this.tokenInstance.foundMyContract(weis, {
        from: this.userAccount,
        value: weis,
        gas: 500000
      })
    } catch (error) {
      console.log(error)
    }
  }
}

