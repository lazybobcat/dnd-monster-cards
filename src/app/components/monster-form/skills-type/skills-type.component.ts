import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { Skill } from 'src/app/models/profile/skill';

@Component({
    selector: 'app-skills-type',
    templateUrl: './skills-type.component.html',
    styleUrls: ['./skills-type.component.scss']
})
export class SkillsTypeComponent {

    @Input() monster: Monster = new Monster();

    constructor() {}

    public addSkill(): void {
        this.monster.skills.push(new Skill('', 0));
    }

    public removeSkill(index: number): void {
        if (index > -1) {
            this.monster.skills.splice(index, 1);
        }
    }

}
