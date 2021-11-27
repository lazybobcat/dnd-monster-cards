import { MonsterSizeEnum } from "./profile/monster-size.enum";
import { MonsterAlignmentEnum } from "./profile/monster-alignment.enum";
import { Speed } from "./profile/speed";
import { AbilityScores } from "./profile/ability-scores";
import { SavingThrows } from "./profile/saving-throws";
import { Skill } from "./profile/skill";
import { DamageImmunity } from "./profile/resistances";
import { MonsterText } from "./profile/monster-text";
import { JsonObject, JsonProperty } from 'json2typescript';
import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';

@JsonObject("Monster")
export class Monster {

    @JsonProperty("id", String)
    public id: string = '';

    @JsonProperty("CR", Number)
    public CR: number = 1;
    @JsonProperty("name", String)
    public name: string = '';
    @JsonProperty("HPMax", Number)
    public HPMax: number = 0;
    @JsonProperty("HPBase", Number)
    public HPBase: number = 0;
    @JsonProperty("nbDie", Number)
    public nbDie: number = 1;
    @JsonProperty("ac", Number)
    public ac: number = 10;

    @JsonProperty("imageUrl", String)
    public imageUrl: string = '';

    @JsonProperty("size", Number)
    public size: MonsterSizeEnum = MonsterSizeEnum.SMALL;
    @JsonProperty("type", String)
    public type: string = '';
    @JsonProperty("alignment", Number)
    public alignment: MonsterAlignmentEnum = MonsterAlignmentEnum.UNALIGNED;
    @JsonProperty("speed", Speed)
    public speed: Speed = new Speed();
    @JsonProperty("abilities", AbilityScores)
    public abilities: AbilityScores = new AbilityScores([]);

    @JsonProperty("spellDC", Number, true)
    public spellDC?: number = undefined;
    @JsonProperty("spellHit", Number, true)
    public spellHit?: number = undefined;
    @JsonProperty("spellHit", Number, true)
    public spellAbility?: AbilitiesEnum = undefined;

    @JsonProperty("savingThrows", SavingThrows)
    public savingThrows: SavingThrows = new SavingThrows([]);
    @JsonProperty("skills", [Skill])
    public skills: Skill[] = [];
    @JsonProperty("senses", [String])
    public senses: string[] = [];
    @JsonProperty("vulnerabilities", [String])
    public vulnerabilities: string[] = [];
    @JsonProperty("resistances", [String])
    public resistances: string[] = [];
    @JsonProperty("immunities", [DamageImmunity])
    public immunities: DamageImmunity[] = [];
    @JsonProperty("languages", [String])
    public languages: string[] = [];

    @JsonProperty("traits", [MonsterText])
    public traits: MonsterText[] = [];
    @JsonProperty("actions", [MonsterText])
    public actions: MonsterText[] = [];
    @JsonProperty("legendaryActions", [MonsterText])
    public legendaryActions: MonsterText[] = [];
    @JsonProperty("reactions", [MonsterText])
    public reactions: MonsterText[] = [];
    @JsonProperty("limitedActions", [MonsterText])
    public limitedActions: MonsterText[] = [];
    @JsonProperty("gear", [MonsterText])
    public gear: MonsterText[] = [];

    public getMagicalImmunities(): DamageImmunity[] {
        return this.immunities.filter(value => !value.fromNonMagicalAttacks);
    }

    public getNonMagicalImmunities(): DamageImmunity[] {
        return this.immunities.filter(value => value.fromNonMagicalAttacks);
    }

}
