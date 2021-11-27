import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';

class CROption {
    name: string = '';
    value: number = 0;
}

@Component({
    selector: 'app-cr-type',
    templateUrl: './cr-type.component.html',
    styleUrls: []
})
export class CrTypeComponent {

    @Input() monster: Monster = new Monster();

    public options: CROption[] = [
        {name: '1/8', value: 1/8},
        {name: '1/4', value: 1/4},
        {name: '1/2', value: 1/2},
    ];

    constructor() {
        for (let i = 1; i <= 30; ++i) {
            this.options.push({name: i.toString(), value: i});
        }
    }

}
