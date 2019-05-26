import { Injectable, Optional, Inject } from '@angular/core';
import contract from 'truffle-contract';
import { Subject } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
declare let require: any;
const Web3 = require('web3');

const token_json = require('../../../build/contracts/Token.json');
declare let window: any;

@Injectable()
export class Web3Service {

  private web3: any;
  private accounts: string[];
  public ready = false;
  private contracts = {
    token: contract,

  };
  // Contracts in Ropsten network
  private contract = '0xc236ba65a0ed1420bd6513f1964c8e76d0236ca2'

  // Contracts in Ganache local network
  //  private contract = '0x97eB23958F756088186E85A0e78b5fF6f343c2Ca'


  public accountsObservable = new Subject<string[]>();

  constructor(public dialog: MatDialog) {


    window.addEventListener('load', async () => {

      await this.bootstrapWeb3();

    });
    window.addEventListener('Buy', async () => {
      console.log('incoming Buy event')
    });
    window.addEventListener('Advertisement', async () => {
      console.log('incoming Advertisement event')

    });
    window.addEventListener('Found', async () => {
      console.log('incoming Advertisement event')

    });
  }

  async bootstrapWeb3() {
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        console.log('Ethereum browser detected.  !');
        // Request account access if needed
        await window.ethereum.enable();
        this.web3 = window.web3
        this.web3.eth.defaultAccount = this.web3.eth.accounts[0]
        const account = await this.web3.eth.getCoinbase()
        console.log(`**** Account: ${account}`)
        // Acccounts now exposed
        await this.refreshAccounts()

      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      console.log('legagy dapp browser');
      window.web3 = new Web3(this.web3.currentProvider);
      this.web3 = window.web3
      // Acccounts always exposed
      await this.refreshAccounts()
    }
    // Non-dapp browsers...
    else {
      let description = 'Non-Ethereum browser detected. You should consider trying MetaMask!'
      this.openDialog('Warning!', description, 'info')
      console.log(description);
    }

  }

  public async getInstanceToken() {
    try {

      if (!this.web3) {
        const delay = new Promise(resolve => setTimeout(resolve, 100));
        await delay;
        return await this.getInstanceToken();
      }
      console.log('web3 connected')
      let contractAbstraction = contract(token_json);
      contractAbstraction.setProvider(this.web3.currentProvider);
      contractAbstraction = await contractAbstraction.at(this.contract)

      return contractAbstraction
    } catch (err) {
      console.log(err)
      return false
    }

  }


  async refreshAccounts() {
    try {
      let accs = await this.web3.eth.getAccounts()
      if (accs.length === 0) {
        console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
        return false;
      }
      if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
        console.log('accs')
        console.log(accs)
        this.accountsObservable.next(accs);
        this.accounts = accs;
      }

      return accs
      this.ready = true;
    } catch (err) {
      console.log('There was an error fetching your accounts.');
    }

  }

  async getBalance(address) {
    console.log('getBalance...' + address)

    const balanceWei = await this.web3.eth.getBalance(address)
    const balance = this.web3.utils.fromWei(balanceWei, 'ether')
    console.log('balance:' + balance)
    return balance


  }

  async estimateGas(data, sender) {
    let toEstimate = {
      data: data,
      from: sender
    }
    let gasEstimated = await this.web3.eth.estimateGas(toEstimate)
    console.log('GasEstimated:' + gasEstimated)
    return gasEstimated
  }

  toWei(amount) {
    let _amount = amount
    _amount = amount.toString()

    console.log(_amount)
    return this.web3.utils.toWei(_amount, "ether")
  }

  toEther(amount) {
    return this.web3.utils.fromWei(amount, 'ether')
  }
  toBigNumber(amount) {
    return this.web3.utils.toBigNumber(amount)
  }


  // TODO
  // get out from here. Create a dialogServices
  private openDialog(title: string, description: string, type: string) {

    let icon = (type == 'danger') ? 'error' : 'info'
    let color = (type == 'danger') ? 'warn' : 'primary'

    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: title, description: description, type: type, icon: icon, color: color }
    });

  }



}
