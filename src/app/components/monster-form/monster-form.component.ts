import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { MonsterAbilityFormatterService } from 'src/app/services/monster-ability-formatter.service';
import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';
import { DieCalculatorService } from 'src/app/services/die-calculator.service';
import { ProficiencyCalculatorService } from 'src/app/services/proficiency-calculator.service';
import { StatBonusCalculatorService } from 'src/app/services/stat-bonus-calculator.service';

@Component({
    selector: 'app-monster-form',
    templateUrl: './monster-form.component.html',
    styleUrls: ['./monster-form.component.scss']
})
export class MonsterFormComponent {

    @Input() monster: Monster = new Monster();
    public abilitiesEnum = AbilitiesEnum;

    constructor(
        public abilityFormatter: MonsterAbilityFormatterService,
        public dieCalculator: DieCalculatorService,
        private proficiencyCalculator: ProficiencyCalculatorService,
        private statBonusCalculator: StatBonusCalculatorService,
    ) {}

    public spellAbilityChanged(value: AbilitiesEnum | undefined): void {
        if (undefined === value) {
            this.monster.spellDC = undefined;
            this.monster.spellHit = undefined;

            return;
        }

        const abilityScore = this.monster.abilities.getAbilityScore(value);
        const spellHit = this.proficiencyCalculator.getBonusFromCR(this.monster.CR)
            + this.statBonusCalculator.getBonusFromStat(abilityScore as number);

        this.monster.spellDC = 8 + spellHit;
        this.monster.spellHit = spellHit;
    }

}
