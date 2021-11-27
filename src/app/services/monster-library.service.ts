import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { BehaviorSubject } from 'rxjs';
import * as uuid from 'uuid';
import { Monster } from 'src/app/models/monster';

export const STORAGE_KEY_LIBRARY: string = 'monsters_library';

@Injectable({
    providedIn: 'root'
})
export class MonsterLibraryService {

    public subject: BehaviorSubject<Monster[]> = new BehaviorSubject<Monster[]>([]);

    private jsonConvert: JsonConvert;
    private library: Monster[] = [];

    constructor() {
        this.jsonConvert = new JsonConvert();
        this.reloadLibrary();
        this.emit();
    }

    public save(monster: Monster): boolean {
        if (!monster.id.length) {
            monster.id = uuid.v4();

            return this.insert(monster);
        }

        return this.update(monster);
    }

    public findById(id: string): Monster | undefined {
        return this.library.find(value => id === value.id);
    }

    public findByName(name: string): Monster[] {
        return this.library.filter(value => value.name.includes(name));
    }

    public sort(): void {
        this.library.sort((a, b) => a.name < b.name ? -1 : 1);
    }

    public flush(): void {
        this.saveLibrary();
    }

    private reloadLibrary(): boolean {
        const str = localStorage.getItem(STORAGE_KEY_LIBRARY);
        if (str) {
            try {
                this.library = this.jsonConvert.deserialize<Monster>(JSON.parse(str), Monster) as Monster[];

                return true;
            } catch (e) {
                console.error(e);
            }
        }

        return false;
    }

    private saveLibrary(): boolean {
        this.sort();
        const json = this.jsonConvert.serialize(this.library);

        try {
            localStorage.setItem(STORAGE_KEY_LIBRARY, JSON.stringify(json));

            return true;
        } catch (e) {
            console.error(e);
        }

        return false;
    }

    private insert(monster: Monster): boolean {
        this.library.push(monster);

        const r = this.saveLibrary();
        if (r) {
            this.emit();
        }

        return r;
    }

    private update(monster: Monster): boolean {
        if (this.findById(monster.id)) {
            this.library = this.library.map(value => (value.id === monster.id) ? monster : value);
        } else {
            return this.insert(monster);
        }


        const r = this.saveLibrary();
        if (r) {
            this.emit();
        }

        return r;
    }

    private emit(): void {
        this.subject.next(this.library);
    }

}
