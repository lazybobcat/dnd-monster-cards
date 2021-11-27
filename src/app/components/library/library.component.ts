import { Component, OnDestroy, OnInit } from '@angular/core';
import { MonsterLibraryService } from 'src/app/services/monster-library.service';
import { Monster } from 'src/app/models/monster';
import { Subscription } from 'rxjs';

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
    }

    ngOnInit(): void {
        this.subscription = this.monsterLibrary.subject.subscribe(value => this.library = value);
    }

    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

}
