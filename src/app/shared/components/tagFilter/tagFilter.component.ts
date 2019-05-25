import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'tag-filter',
    templateUrl: './tagFilter.component.html',
    styleUrls: ['./tagFilter.component.css']
})
export class TagFilterComponent {
    public isVisible: Boolean = false;

    @Input()
    public tags: string[] = [];

    @Output()
    public tagSelected: EventEmitter<String> = new EventEmitter<String>();

    public showHidden() {
        this.isVisible = !this.isVisible;
    }

    public selectTag(tag) {
       this.tagSelected.emit(tag);
    }
}
