import { Component, Input } from '@angular/core';
import { AbilityScores } from 'src/app/models/profile/ability-scores';
import { MonsterAbilityFormatterService } from 'src/app/services/monster-ability-formatter.service';
import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';

@Component({
    selector: 'app-abilities-type',
    templateUrl: './abilities-type.component.html',
    styleUrls: ['./abilities-type.component.scss']
})
export class AbilitiesTypeComponent {

    @Input() abilities: AbilityScores = new AbilityScores([]);
    public enum = AbilitiesEnum;

    constructor(public abilityFormatter: MonsterAbilityFormatterService) {}

}
