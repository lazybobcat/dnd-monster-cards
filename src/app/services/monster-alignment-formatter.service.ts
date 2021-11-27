import { Injectable } from '@angular/core';
import { MonsterAlignmentEnum } from "src/app/models/profile/monster-alignment.enum";

@Injectable({
    providedIn: 'root'
})
export class MonsterAlignmentFormatterService {

    public format(alignment: MonsterAlignmentEnum): string {
        switch (alignment) {
            case MonsterAlignmentEnum.UNALIGNED:
                return 'non-aligné(e)';
            case MonsterAlignmentEnum.LG:
                return 'Loyal Bon';
            case MonsterAlignmentEnum.LN:
                return 'Loyal Neutre';
            case MonsterAlignmentEnum.LE:
                return 'Loyal Mauvais';
            case MonsterAlignmentEnum.NG:
                return 'Neutre Bon';
            case MonsterAlignmentEnum.N:
                return 'Neutre';
            case MonsterAlignmentEnum.NE:
                return 'Neutre Mauvais'
            case MonsterAlignmentEnum.CG:
                return 'Chaotique Bon'
            case MonsterAlignmentEnum.CN:
                return 'Chaotique Neutre'
            case MonsterAlignmentEnum.CE:
                return 'Chaotique Mauvais'
        }

        console.error('Unknown alignment ' + alignment + '. Unable to format.');
        return '';
    }
}
