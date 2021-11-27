import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProficiencyCalculatorService {

    public getBonusFromCR(cr: number): number {
        switch (cr) {
            case 0:
            case 1 / 8:
            case 1 / 4:
            case 1 / 2:
            case 1:
            case 2:
            case 3:
            case 4:
                return 2;
            case 5:
            case 6:
            case 7:
            case 8:
                return 3;
            case 9:
            case 10:
            case 11:
            case 12:
                return 4;
            case 13:
            case 14:
            case 15:
            case 16:
                return 5;
            case 17:
            case 18:
            case 19:
            case 20:
                return 6;
            case 21:
            case 22:
            case 23:
            case 24:
                return 7;
            case 25:
            case 26:
            case 27:
            case 28:
                return 8;
            case 29:
            case 30:
                return 9;
        }

        console.error('Unknown CR ' + cr + '. Unable to convert to proficiency bonus');
        return 0;
    }

}
