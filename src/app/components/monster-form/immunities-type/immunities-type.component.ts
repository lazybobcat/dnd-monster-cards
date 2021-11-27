import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
    selector: 'app-immunities-type',
    templateUrl: './immunities-type.component.html',
    styleUrls: ['./immunities-type.component.scss']
})
export class ImmunitiesTypeComponent {

    @Input() monster: Monster = new Monster();

    constructor() {}

    public addImmunity(): void {
        this.monster.immunities.push({type: '', fromNonMagicalAttacks: false});
    }

    public removeImmunity(index: number): void {
        if (index > -1) {
            this.monster.immunities.splice(index, 1);
        }
    }

}
