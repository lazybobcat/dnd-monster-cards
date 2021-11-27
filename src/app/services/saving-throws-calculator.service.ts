import { Injectable } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { AbilityScore } from 'src/app/models/profile/ability-scores';
import { ProficiencyCalculatorService } from 'src/app/services/proficiency-calculator.service';
import { StatBonusCalculatorService } from 'src/app/services/stat-bonus-calculator.service';
import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';

@Injectable({
    providedIn: 'root'
})
export class SavingThrowsCalculatorService {

    constructor(
        private proficiencyCalculator: ProficiencyCalculatorService,
        private statBonusCalculator: StatBonusCalculatorService
    ) {}

    public getSavingThrows(monster: Monster): AbilityScore[] {
        let scores: AbilityScore[] = [];
        let proficiency: number = this.proficiencyCalculator.getBonusFromCR(monster.CR);

        if (monster.savingThrows.strength) {
            const score = this.statBonusCalculator.getBonusFromStat(monster.abilities.strength) + proficiency;
            scores.push({ability: AbilitiesEnum.STRENGTH, score: score});
        }

        if (monster.savingThrows.dexterity) {
            const score = this.statBonusCalculator.getBonusFromStat(monster.abilities.dexterity) + proficiency;
            scores.push({ability: AbilitiesEnum.DEXTERITY, score: score});
        }

        if (monster.savingThrows.constitution) {
            const score = this.statBonusCalculator.getBonusFromStat(monster.abilities.constitution) + proficiency;
            scores.push({ability: AbilitiesEnum.CONSTITUTION, score: score});
        }

        if (monster.savingThrows.intelligence) {
            const score = this.statBonusCalculator.getBonusFromStat(monster.abilities.intelligence) + proficiency;
            scores.push({ability: AbilitiesEnum.INTELLIGENCE, score: score});
        }

        if (monster.savingThrows.wisdom) {
            const score = this.statBonusCalculator.getBonusFromStat(monster.abilities.wisdom) + proficiency;
            scores.push({ability: AbilitiesEnum.WISDOM, score: score});
        }

        if (monster.savingThrows.charisma) {
            const score = this.statBonusCalculator.getBonusFromStat(monster.abilities.charisma) + proficiency;
            scores.push({ability: AbilitiesEnum.CHARISMA, score: score});
        }

        return scores;
    }

}
