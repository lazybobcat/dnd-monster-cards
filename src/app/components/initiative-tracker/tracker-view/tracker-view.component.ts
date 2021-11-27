import { Component, Input, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { StatBonusCalculatorService } from 'src/app/services/stat-bonus-calculator.service';

@Component({
    selector: 'app-tracker-view',
    templateUrl: './tracker-view.component.html',
    styleUrls: ['./tracker-view.component.scss']
})
export class TrackerViewComponent {

    @Input() monster?: Monster = undefined;
    @Input() displayImage = true;

    constructor(
        public bonusCalculator: StatBonusCalculatorService,
    ) {}

}
