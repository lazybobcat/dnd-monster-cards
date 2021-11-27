import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from 'src/app/models/monster';
import { MonsterLibraryService } from 'src/app/services/monster-library.service';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit{

    public monster?: Monster = undefined;

    public displayImageOnCard: boolean = false;
    public displayEntitiesOnCard: boolean = true;
    public coverImageOnCard: boolean = false;
    public roundedCard: boolean = true;
    public displayImageOnTracker: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private monsterLibrary: MonsterLibraryService
    ) {

    }

    public ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        if (id) {
            const monster = this.monsterLibrary.find(id);
            if (monster) {
                this.monster = monster;
            }
        }

        if (!this.monster) {
            this.monster = new Monster();
        }
    }

    public saveMonster(): void {
        this.monsterLibrary.save(this.monster as Monster);
    }

    public newMonster(): void {
        this.monster = new Monster();
    }

}
