import { Component, OnInit } from '@angular/core';
import { UportService } from '../util/uport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private uportService: UportService,
    private router:Router) { }

  async ngOnInit() {
    try {
      const resp = await this.uportService.request()
      
      this.router.navigateByUrl('/home'); 
    } catch (error) {
      console.log('not authorized')
    }
  
  }

}
