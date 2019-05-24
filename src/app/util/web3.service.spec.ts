import {TestBed, inject} from 'src/app/components/dialog-qr/node_modules/src/app/components/dialog/node_modules/@angular/core/testing';
const Web3 = require('web3');

import {Web3Service} from './web3.service';


declare let window: any;

describe('Web3Service', async () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Web3Service]
    });
  });

  it('should be created',  inject([Web3Service], (service: Web3Service) => {
    expect(service).toBeTruthy();
  }));

  it('should inject a default web3 on a contract', inject([Web3Service], (service: Web3Service)=> async ()=> {
    service.bootstrapWeb3();

      const abstraction = await service.getInstanceToken()
      expect(abstraction.currentProvider.host).toBe('http://localhost:8545');
  }));

  it('should inject a the window web3 on a contract', inject([Web3Service], (service: Web3Service) => async ()=> {
    window.web3 = {
      currentProvider: new Web3.providers.HttpProvider('http://localhost:1337')
    };

    service.bootstrapWeb3();

    const abstraction = await service.getInstanceToken()
    expect(abstraction.currentProvider.host).toBe('http://localhost:1337');
     
  }));
});
