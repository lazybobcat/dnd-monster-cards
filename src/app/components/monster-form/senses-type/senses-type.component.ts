import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
    selector: 'app-senses-type',
    templateUrl: './senses-type.component.html',
    styleUrls: ['./senses-type.component.scss']
})
export class SensesTypeComponent {

    @Input() monster: Monster = new Monster();

    constructor() {}

    public addSense(): void {
        this.monster.senses.push('');
    }

    public editSense(index: number, event: any): void {
        this.monster.senses[index] = event.target.value;
    }

    public removeSense(index: number): void {
        if (index > -1) {
            this.monster.senses.splice(index, 1);
        }
    }

}
