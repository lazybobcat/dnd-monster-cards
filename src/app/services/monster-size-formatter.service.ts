import { Injectable } from '@angular/core';
import { MonsterSizeEnum } from "src/app/models/profile/monster-size.enum";

@Injectable({
    providedIn: 'root'
})
export class MonsterSizeFormatterService {

    public format(size: MonsterSizeEnum): string {
        switch (size) {
            case MonsterSizeEnum.VERY_SMALL:
                return 'TP';
            case MonsterSizeEnum.SMALL:
                return 'P';
            case MonsterSizeEnum.MEDIUM:
                return 'M';
            case MonsterSizeEnum.BIG:
                return 'G';
            case MonsterSizeEnum.VERY_BIG:
                return 'TG';
            case MonsterSizeEnum.GIGANTIC:
                return 'Gig';
        }

        console.error('Unknown size ' + size + '. Unable to format.');
        return '';
    }

    public formatFull(size: MonsterSizeEnum): string {
        switch (size) {
            case MonsterSizeEnum.VERY_SMALL:
                return 'Très Petite';
            case MonsterSizeEnum.SMALL:
                return 'Petite';
            case MonsterSizeEnum.MEDIUM:
                return 'Moyenne';
            case MonsterSizeEnum.BIG:
                return 'Grande';
            case MonsterSizeEnum.VERY_BIG:
                return 'Très Grande';
            case MonsterSizeEnum.GIGANTIC:
                return 'Gigantesque';
        }

        console.error('Unknown size ' + size + '. Unable to format.');
        return '';
    }

}
