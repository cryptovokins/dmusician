import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogQrComponent } from '../dialog-qr/dialog-qr.component';
import { Web3Service } from '../../../util/web3.service';

@Component({
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
 
    accounts: string[];
    tokenInstance: any;
    tokenSaleInstance: any;
    tokensAvailable = 750000
    model = {
      ether: 0,
      amount: 5,
      receiver: '',
      balance: 0,
      account: '',
      link: ''
    };
  
    status = '';
    cards = [];
    tokenSale: {
      tokenPrice: 1000000000000000,
      tokenSold: Number,
      progressPercent: Number
    }
    numberOfTokens = 0;
  
    constructor(private web3Service: Web3Service, private matSnackBar: MatSnackBar, private dialog: MatDialog) {
      console.log('Constructor: ' + web3Service);
    }
  
    async ngOnInit() {
  
      await this.watchAccount();
      await this.getInstance();
    }
    async getInstance() {
      try {
        console.log('getInstance....')
        this.tokenInstance = await this.web3Service.getInstanceToken()
        if (this.tokenInstance) {
          this.refreshTokenBalance();
        }
      } catch (err) {
        console.log('Calilea Token has not been found in this account')
  
      }
    }
    async watchAccount() {
      this.web3Service.accountsObservable.subscribe((accounts) => {
        console.log(accounts)
        this.accounts = accounts;
        this.model.account = accounts[0];
        this.model.link = `https://ropsten.etherscan.io/address/${accounts[0]}`;
  
        this.refreshEtherBalance(this.model.account)
  
      });
    }
    async setMaxAllowed() {
      let maxTokenAllowed = 1000
      const allowed = await this.tokenInstance.approve.call(this.model.account, maxTokenAllowed);
  
    }
    setStatus(status) {
      this.matSnackBar.open(status, null, { duration: 3000 });
    }
  
  
    async refreshEtherBalance(account) {
      console.log('Refreshing ETH balance');
  
      try {
        console.log('Account', account);
        let etherBalance = await this.web3Service.getBalance(account);
        this.model.ether = etherBalance
  
      } catch (e) {
        console.log(e);
        this.setStatus('Error getting balance; see log.');
      }
    }
  
    async refreshTokenBalance() {
      console.log('Refreshing balance');
  
      try {
  
        let tokenBalance = await this.tokenInstance.balanceOf.call(this.model.account)
        let decimals = await this.tokenInstance.decimals.call();
        
        let balance = Number(tokenBalance.toString()) / (10 ** (decimals.toString()));
        this.model.balance = balance
        console.log('balance: ' + this.model.balance);
        let tokenData = { title: 'Token ', cols: 1, rows: 1, value: balance, label: 'Tokens', currency: 'CAL', icon: 'assets/img/tokens/cal.png', link: 'https://ropsten.etherscan.io/token/0x23803d6ca1b654ca0a0ec607445ce1f50c0a7a3c' }
        this.cards.push(tokenData)
  
      } catch (e) {
        console.log(e);
        this.setStatus('Error getting balance; see log.');
      }
    }
  
  
    setAmount(e) {
      console.log('Setting amount: ' + e.target.value);
      this.model.amount = e.target.value;
    }
  
    setReceiver(e) {
      console.log('Setting receiver: ' + e.target.value);
      this.model.receiver = e.target.value;
    }
    goEtherscan(url) {
      window.open(url, "_blank");
    }
  
    openDialogQr( wallet: string){
      const dialogRef = this.dialog.open(DialogQrComponent, {
       
        data: {title: 'wallet', color: 'primary', wallet: wallet }
      });
    }
   
  
  }
  