import { Injectable } from '@angular/core';
import { MonsterSizeEnum } from "src/app/models/profile/monster-size.enum";
import { DiceType } from "src/app/models/dice-type";

@Injectable({
    providedIn: 'root'
})
export class DieCalculatorService {

    public getDiceType(size: MonsterSizeEnum): DiceType {
        switch (size) {
            case MonsterSizeEnum.VERY_SMALL:
                return new DiceType(4);
            case MonsterSizeEnum.SMALL:
                return new DiceType(6);
            case MonsterSizeEnum.MEDIUM:
                return new DiceType(8);
            case MonsterSizeEnum.BIG:
                return new DiceType(10);
            case MonsterSizeEnum.VERY_BIG:
                return new DiceType(12);
            case MonsterSizeEnum.GIGANTIC:
                return new DiceType(20);
        }
    }

}
