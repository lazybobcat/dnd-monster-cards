import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MonsterLibraryService } from 'src/app/services/monster-library.service';
import { Monster } from 'src/app/models/monster';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit, OnDestroy {

    public library: Monster[] = [];
    private subscription?: Subscription = undefined;

    constructor(
        private monsterLibrary: MonsterLibraryService
    ) {
        this.monsterLibrary.sort();
    }

    ngOnInit(): void {
        this.subscription = this.monsterLibrary.subject.subscribe(value => this.library = value);
    }

    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

}
