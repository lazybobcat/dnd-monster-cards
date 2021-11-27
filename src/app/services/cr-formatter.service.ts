import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CrFormatterService {

    public format(cr: number): string {
        switch (cr) {
            case 1/8:
                return '1/8';
            case 1/4:
                return '1/4';
            case 1/2:
                return '1/2';
            default:
                return cr.toString();
        }
    }
}
