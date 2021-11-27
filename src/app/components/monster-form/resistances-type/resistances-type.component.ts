import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
    selector: 'app-resistances-type',
    templateUrl: './resistances-type.component.html',
    styleUrls: ['./resistances-type.component.scss']
})
export class ResistancesTypeComponent {

    @Input() monster: Monster = new Monster();

    constructor() {}

    public addResistance(): void {
        this.monster.resistances.push('');
    }

    public editResistance(index: number, event: any): void {
        this.monster.resistances[index] = event.target.value;
    }

    public removeResistance(index: number): void {
        if (index > -1) {
            this.monster.resistances.splice(index, 1);
        }
    }

}
