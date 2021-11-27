import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
    selector: 'app-vulnerabilities-type',
    templateUrl: './vulnerabilities-type.component.html',
    styleUrls: ['./vulnerabilities-type.component.scss']
})
export class VulnerabilitiesTypeComponent {

    @Input() monster: Monster = new Monster();

    constructor() {}

    public addVulnerability(): void {
        this.monster.vulnerabilities.push('');
    }

    public editVulnerability(index: number, event: any): void {
        this.monster.vulnerabilities[index] = event.target.value;
    }

    public removeVulnerability(index: number): void {
        if (index > -1) {
            this.monster.vulnerabilities.splice(index, 1);
        }
    }

}
