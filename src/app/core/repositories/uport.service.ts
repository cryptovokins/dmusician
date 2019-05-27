import { Injectable } from '@angular/core';
import { Connect } from 'uport-connect'
@Injectable({
  providedIn: 'root'
})
export class UportService {
 
  uport = new Connect('DMusician', {
    network: "ropsten",
   
})
  constructor() { }
  async request() {
     
    
    this.uport.requestDisclosure({
      requested: ["name", "phone", "country"]
    } )

    const res = await this.uport.onResponse('disclosureReq') 
     
    const did = res.payload.did
    const json = JSON.stringify(res.payload)
    console.log(json)
    return json;
  
     
  } 
  
}
