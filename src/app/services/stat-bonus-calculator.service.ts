import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StatBonusCalculatorService {

    public getBonusFromStatAsString(stat: number): string {
        const bonus = this.getBonusFromStat(stat);

        if (bonus > 0) {
            return "+" + bonus;
        }

        return bonus.toString();
    }

    public getBonusFromStat(stat: number): number {
        return Math.floor((stat - 10) / 2.0);
    }

}
