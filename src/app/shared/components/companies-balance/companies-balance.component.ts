import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContractService } from '../../../core/repositories/contract.service';

@Component({
  selector: 'companies-balance',
  templateUrl: './companies-balance.component.html',
  styleUrls: ['./companies-balance.component.css']
})
export class CompaniesBalanceComponent implements OnInit , OnDestroy{
  balance: number
  companiesBalance: number
  admin: boolean;
  constructor(private contractService: ContractService) {
     
  }
  ngOnInit() {
    this.contractService.admin$.subscribe (admin => this.admin = admin); 
    this.contractService.companiesBalance$.subscribe (balance => this.companiesBalance = balance); 
    
  }
 
  async setCompaniesBalance() {
    try {
      console.log(this.balance)
       await this.contractService.setCompaniesBalance(this.balance);
      
    } catch (error) {
      console.log(error)
    }
  }
  
  ngOnDestroy(){
    this.contractService.admin$.unsubscribe();
    this.contractService.companiesBalance$.unsubscribe();
  }


}
