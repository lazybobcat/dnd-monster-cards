import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { MonsterAbilityFormatterService } from 'src/app/services/monster-ability-formatter.service';
import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';

@Component({
    selector: 'app-monster-form',
    templateUrl: './monster-form.component.html',
    styleUrls: ['./monster-form.component.scss']
})
export class MonsterFormComponent {

    @Input() monster: Monster = new Monster();
    public abilitiesEnum = AbilitiesEnum;

    constructor(public abilityFormatter: MonsterAbilityFormatterService) {}

}
