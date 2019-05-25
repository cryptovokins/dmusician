import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Filter } from '../../../entities';

@Component({
    selector: 'search-bar',
    templateUrl: './searchBar.component.html',
    styleUrls: ['./searchBar.component.css']
})
export class SearchBarComponent {

    @Input()
    public filter: Filter = {
        buttonText: 'Song filter',
        tags: ['Rock', 'Pop', 'Indy', 'Classic']
    };

    @Input()
    public logo: string = 'assets/dmusic-logo.png';

    @Output()
    public searchQuery: EventEmitter<string> = new EventEmitter<string>();

    public onSearch(searchField: string): void {
        this.searchQuery.emit(searchField);
    }
}
