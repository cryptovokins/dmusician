import { Injectable } from '@angular/core';
import { Web3Service } from './web3.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private tokenInstance: any
  private accounts: string[];
  private userAccount: string;
  private owner: string;
  admin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  companiesBalance$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private web3Service: Web3Service) {
    this.initService()
   
  }
  private async  initService() {
    this.tokenInstance = await this.web3Service.getInstanceToken();
    this.accounts = await this.web3Service.refreshAccounts();
    
    this.userAccount = this.accounts[0]
    this.owner =  await this.tokenInstance.owner()
    console.log('owner:'+this.owner)
    let admin = (this.owner ==  this.userAccount) ? true : false;
    this.admin$.next(admin)

    this.getCompaniesBalance()
  }

  async buySong(weis) {

    let weisToAuthor = weis * 0.9;
    let weisToDmusic = weis * 0.1;
    try {
      await this.tokenInstance.buySong(weisToAuthor, weisToDmusic, {
        from: this.userAccount,
        value: weis,
        gas: 500000
      });
      await this.web3Service.refreshUserAccount(this.userAccount)
    } catch (error) {
      throw error.message
    }
  }

  async clickAdvertisement(weis) {
    try {
      await this.tokenInstance.clickAdvertisement(this.userAccount, weis, {
        from: this.userAccount,
        gas: 50000
      })

      this.getCompaniesBalance()  
      await this.web3Service.refreshUserAccount(this.userAccount)
    } catch (error) {
     throw error.message
    }
  }
  async setCompaniesBalance(weis) {
    try {
      let companies = await this.tokenInstance.companies();
      console.log(weis)
      await this.tokenInstance.setCompaniesBalance(companies, {
        from: this.userAccount,
        value: weis,
        gas: 70000
      })

     this.getCompaniesBalance()  
    } catch (error) {
      throw error
    }
  }
  async getCompaniesBalance(){
    this.tokenInstance = await this.web3Service.getInstanceToken();
    let companies = await this.tokenInstance.companies();
    let balance = await this.tokenInstance.balanceOf(companies)
    this.companiesBalance$.next(balance)
  }

  
}

