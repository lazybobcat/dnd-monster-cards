import { Component, Input, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-language-type',
  templateUrl: './language-type.component.html',
  styleUrls: ['./language-type.component.scss']
})
export class LanguageTypeComponent {

    @Input() monster: Monster = new Monster();

    constructor() {}

    public addLanguage(): void {
        this.monster.languages.push('');
    }

    public editLanguage(index: number, event: any): void {
        this.monster.languages[index] = event.target.value;
    }

    public removeLanguage(index: number): void {
        if (index > -1) {
            this.monster.languages.splice(index, 1);
        }
    }

}
