import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'tag-filter',
    templateUrl: './tagFilter.component.html',
    styleUrls: ['./tagFilter.component.css']
})
export class TagFilter {
    private isVisible: Boolean = false;

    @Input()
    public tags: string[] = [];

    @Output()
    public tagSelected: EventEmitter<String> = new EventEmitter<String>();

    private showHidden() {
        this.isVisible = !this.isVisible;
    }

    private selectTag(tag) {
       this.tagSelected.emit(tag);
    }
}
