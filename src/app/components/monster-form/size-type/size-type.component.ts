import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { MonsterSizeEnum } from 'src/app/models/profile/monster-size.enum';
import { MonsterSizeFormatterService } from 'src/app/services/monster-size-formatter.service';

class SizeOption {
    name: string = '';
    value: MonsterSizeEnum = MonsterSizeEnum.SMALL;
}

@Component({
    selector: 'app-size-type',
    templateUrl: './size-type.component.html',
    styleUrls: []
})
export class SizeTypeComponent {

    @Input() monster: Monster = new Monster();

    public options: SizeOption[] = [];

    constructor(private sizeFormatter: MonsterSizeFormatterService) {
        this.options = [
            {name: sizeFormatter.formatFull(MonsterSizeEnum.VERY_SMALL), value: MonsterSizeEnum.VERY_SMALL},
            {name: sizeFormatter.formatFull(MonsterSizeEnum.SMALL), value: MonsterSizeEnum.SMALL},
            {name: sizeFormatter.formatFull(MonsterSizeEnum.MEDIUM), value: MonsterSizeEnum.MEDIUM},
            {name: sizeFormatter.formatFull(MonsterSizeEnum.BIG), value: MonsterSizeEnum.BIG},
            {name: sizeFormatter.formatFull(MonsterSizeEnum.VERY_BIG), value: MonsterSizeEnum.VERY_BIG},
            {name: sizeFormatter.formatFull(MonsterSizeEnum.GIGANTIC), value: MonsterSizeEnum.GIGANTIC},
        ];
    }

}
