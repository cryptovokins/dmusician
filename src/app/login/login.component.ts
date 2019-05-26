import { Component, OnInit } from '@angular/core';
import { UportService } from '../util/uport.service';
import { Router } from '@angular/router';
import { SessionRepoService } from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private uportService: UportService,
    private sessionRepo: SessionRepoService,
    private router:Router,

    ) { }

  async ngOnInit() {
    if (!this.sessionRepo.hasSession()) {
      try {
        const resp = await this.uportService.request();

        this.sessionRepo.saveId(resp);
        this.router.navigateByUrl('/home');
      } catch (error) {
        console.log('not authorized')
      }
    }
  }

}
