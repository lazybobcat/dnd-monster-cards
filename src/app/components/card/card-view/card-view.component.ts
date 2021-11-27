import { Component, Input, OnInit } from '@angular/core';
import { StatBonusCalculatorService } from "src/app/services/stat-bonus-calculator.service";
import { PxCalculatorService } from "src/app/services/px-calculator.service";
import { Monster } from "src/app/models/monster";
import { MonsterSizeFormatterService } from "src/app/services/monster-size-formatter.service";
import { MonsterAlignmentFormatterService } from 'src/app/services/monster-alignment-formatter.service';
import { SavingThrowsCalculatorService } from 'src/app/services/saving-throws-calculator.service';
import { MonsterAbilityFormatterService } from 'src/app/services/monster-ability-formatter.service';
import { DieCalculatorService } from 'src/app/services/die-calculator.service';
import { CrFormatterService } from 'src/app/services/cr-formatter.service';

@Component({
    selector: 'app-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {

    @Input() monster?: Monster = undefined;
    @Input() format: 'A5' | 'poker' = 'A5';
    @Input() displayEntities = true;
    @Input() rounded = true;
    @Input() displayImage = false;
    @Input() backgroundCover = false;

    constructor(
        public bonusCalculator: StatBonusCalculatorService,
        public pxCalculator: PxCalculatorService,
        public savingsCalculator: SavingThrowsCalculatorService,
        public dieCalculator: DieCalculatorService,
        public sizeFormatter: MonsterSizeFormatterService,
        public alignmentFormatter: MonsterAlignmentFormatterService,
        public abilityFormatter: MonsterAbilityFormatterService,
        public crFormatter: CrFormatterService,
    ) {}

    public backgroundImage(): string {
        if (!this.monster || !this.monster.imageUrl || !this.displayImage) {
            return '';
        }

        return "url('" + this.monster.imageUrl + "')";
    }

}
