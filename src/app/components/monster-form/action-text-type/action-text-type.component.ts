import { Component, Input } from '@angular/core';
import { MonsterText } from 'src/app/models/profile/monster-text';

@Component({
    selector: 'app-action-text-type',
    templateUrl: './action-text-type.component.html',
    styleUrls: ['./action-text-type.component.scss']
})
export class ActionTextTypeComponent {

    @Input() name: string = 'actions';
    @Input() subset: MonsterText[] = [];

    constructor() {}

    public addParagraph(): void {
        this.subset.push({title: '', description: ''});
    }

    public removeParagraph(index: number): void {
        if (index > -1) {
            this.subset.splice(index, 1);
        }
    }

}
