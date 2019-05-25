import { Component, OnInit } from '@angular/core';
import { ContractService } from '../util/contract.service';
@Component({
  selector: 'app-home-player',
  templateUrl: './home-player.component.html',
  styleUrls: ['./home-player.component.css']
})
export class HomePlayerComponent implements OnInit {

  constructor(private contractService:ContractService) { }
  private weisToPlay =  1000000000000000;
  private weisToClick = 5000000000000000  ;
  foundAmount = 0;

  ngOnInit() {
  }

  play(){
    this.contractService.buySong(this.weisToPlay)
  }
  clickAdvertisment(){
    this.contractService.clickAdvertisement(this.weisToClick)
  }
  foundMyCompany(){
    this.contractService.foundMyContract(this.foundAmount)
  }
}
