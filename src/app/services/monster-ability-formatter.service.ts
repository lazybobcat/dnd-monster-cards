import { Injectable } from '@angular/core';
import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';

@Injectable({
    providedIn: 'root'
})
export class MonsterAbilityFormatterService {

    public format(ability: AbilitiesEnum): string {
        switch (ability) {
            case AbilitiesEnum.STRENGTH:
                return 'Force';
            case AbilitiesEnum.DEXTERITY:
                return 'Dextérité';
            case AbilitiesEnum.CONSTITUTION:
                return 'Constitution';
            case AbilitiesEnum.INTELLIGENCE:
                return 'Intelligence';
            case AbilitiesEnum.WISDOM:
                return 'Sagesse';
            case AbilitiesEnum.CHARISMA:
                return 'Charisme';
        }

        console.error('Unknown ability ' + ability + '. Unable to format.');
        return '';
    }

    public formatShort(ability: AbilitiesEnum): string {
        switch (ability) {
            case AbilitiesEnum.STRENGTH:
                return 'For';
            case AbilitiesEnum.DEXTERITY:
                return 'Dex';
            case AbilitiesEnum.CONSTITUTION:
                return 'Con';
            case AbilitiesEnum.INTELLIGENCE:
                return 'Int';
            case AbilitiesEnum.WISDOM:
                return 'Sag';
            case AbilitiesEnum.CHARISMA:
                return 'Cha';
        }

        console.error('Unknown ability ' + ability + '. Unable to format.');
        return '';
    }

}
