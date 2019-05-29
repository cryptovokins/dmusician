import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogQrComponent } from '../dialog-qr/dialog-qr.component';
import { Web3Service } from '../../../core/repositories/web3.service';
declare var blockies: any;

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
    avatar:string;
    constructor(private web3Service: Web3Service, private dialog: MatDialog) {
    }
  
    async ngOnInit() {
      
      await this.watchAccount();

      this.web3Service.mainAccountBalance$.subscribe(balance => this.model.ether = balance)

      this.avatar = this.createBlockie();
    }
  
    async watchAccount() {
      this.web3Service.accountsObservable.subscribe((accounts) => {
        console.log(accounts)
        this.accounts = accounts;
        this.model.account = accounts[0];
        this.model.link = `https://ropsten.etherscan.io/address/${accounts[0]}`;
   
  
      });

    }
    createBlockie(){
      return blockies.create({ seed:this.model.account ,size: 8,scale: 16}).toDataURL()
       
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
  