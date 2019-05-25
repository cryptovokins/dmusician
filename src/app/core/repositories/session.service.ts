import { Injectable } from '@angular/core';

@Injectable()
export class SessionRepoService {

    public saveId(id: any): void {
        localStorage.setItem('session', JSON.stringify(id));
    }

    public getId(): any {
        return JSON.parse(localStorage.getItem('session'));
    }

    public hasSession(): boolean {
        return !!(localStorage.getItem('session'));
    }
}