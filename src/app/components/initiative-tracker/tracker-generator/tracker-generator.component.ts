import { Component } from '@angular/core';
import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';
import { Monster } from 'src/app/models/monster';

@Component({
    selector: 'app-tracker-generator',
    templateUrl: './tracker-generator.component.html',
    styleUrls: ['./tracker-generator.component.scss']
})
export class TrackerGeneratorComponent {

    public abilitiesEnum = AbilitiesEnum;
    public Array = Array;
    public Math = Math;
    public monsters: Monster[] = [];

    constructor() {
        this.monsters.push(new Monster());
    }

    public addMonster(): void {
        this.monsters.push(new Monster());
    }

    public removeMonster(index: number): void {
        if (index > -1) {
            this.monsters.splice(index, 1);
        }
    }

}
