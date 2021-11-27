import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { MonsterAlignmentEnum } from 'src/app/models/profile/monster-alignment.enum';
import { MonsterAlignmentFormatterService } from 'src/app/services/monster-alignment-formatter.service';

class AlignmentOption {
    name: string = '';
    value: MonsterAlignmentEnum = MonsterAlignmentEnum.UNALIGNED;
}

@Component({
    selector: 'app-alignment-type',
    templateUrl: './alignment-type.component.html',
    styleUrls: []
})
export class AlignmentTypeComponent {

    @Input() monster: Monster = new Monster();

    public options: AlignmentOption[] = [];

    constructor(private alignmentFormatter: MonsterAlignmentFormatterService) {
        this.options = [
            {name: alignmentFormatter.format(MonsterAlignmentEnum.UNALIGNED), value: MonsterAlignmentEnum.UNALIGNED},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.LG), value: MonsterAlignmentEnum.LG},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.LN), value: MonsterAlignmentEnum.LN},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.LE), value: MonsterAlignmentEnum.LE},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.NG), value: MonsterAlignmentEnum.NG},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.N), value: MonsterAlignmentEnum.N},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.NE), value: MonsterAlignmentEnum.NE},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.CG), value: MonsterAlignmentEnum.CG},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.CN), value: MonsterAlignmentEnum.CN},
            {name: alignmentFormatter.format(MonsterAlignmentEnum.CE), value: MonsterAlignmentEnum.CE},
        ];
    }

}
