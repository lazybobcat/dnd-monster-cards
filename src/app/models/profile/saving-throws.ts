import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';
import { JsonObject, JsonProperty } from 'json2typescript';
import { AbilityScore } from 'src/app/models/profile/ability-scores';

@JsonObject("SavingThrow")
export class SavingThrow {
    @JsonProperty("ability", Number)
    public ability: AbilitiesEnum = AbilitiesEnum.STRENGTH;
    @JsonProperty("proficiency", Boolean)
    public proficiency: boolean = false;

    constructor(ability: AbilitiesEnum = AbilitiesEnum.STRENGTH, proficiency: boolean = false) {
        this.ability = ability;
        this.proficiency = proficiency;
    }
}

@JsonObject("SavingThrows")
export class SavingThrows {
    @JsonProperty("scores", [SavingThrow])
    public scores: SavingThrow[];

    constructor(scores: SavingThrow[]) {
        this.scores = scores;
    }

    get strength(): boolean {
        return this.getAbilityScore(AbilitiesEnum.STRENGTH);
    }
    set strength(value: boolean) {
        let stat = this.getAbility(AbilitiesEnum.STRENGTH);

        if (stat) {
            stat.proficiency = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.STRENGTH, proficiency: value});
        }
    }

    get dexterity(): boolean {
        return this.getAbilityScore(AbilitiesEnum.DEXTERITY);
    }
    set dexterity(value: boolean) {
        let stat = this.getAbility(AbilitiesEnum.DEXTERITY);

        if (stat) {
            stat.proficiency = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.DEXTERITY, proficiency: value});
        }
    }

    get constitution(): boolean {
        return this.getAbilityScore(AbilitiesEnum.CONSTITUTION);
    }
    set constitution(value: boolean) {
        let stat = this.getAbility(AbilitiesEnum.CONSTITUTION);

        if (stat) {
            stat.proficiency = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.CONSTITUTION, proficiency: value});
        }
    }

    get intelligence(): boolean {
        return this.getAbilityScore(AbilitiesEnum.INTELLIGENCE);
    }
    set intelligence(value: boolean) {
        let stat = this.getAbility(AbilitiesEnum.INTELLIGENCE);

        if (stat) {
            stat.proficiency = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.INTELLIGENCE, proficiency: value});
        }
    }

    get wisdom(): boolean {
        return this.getAbilityScore(AbilitiesEnum.WISDOM);
    }
    set wisdom(value: boolean) {
        let stat = this.getAbility(AbilitiesEnum.WISDOM);

        if (stat) {
            stat.proficiency = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.WISDOM, proficiency: value});
        }
    }

    get charisma(): boolean {
        return this.getAbilityScore(AbilitiesEnum.CHARISMA);
    }
    set charisma(value: boolean) {
        let stat = this.getAbility(AbilitiesEnum.CHARISMA);

        if (stat) {
            stat.proficiency = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.CHARISMA, proficiency: value});
        }
    }

    public length(): number {
        return this.scores.length;
    }

    public getAbilityScore(ability: AbilitiesEnum): boolean {
        const stat = this.getAbility(ability);

        return stat ? stat.proficiency : false;
    }

    public getAbility(ability: AbilitiesEnum): SavingThrow | undefined {
        const stat = this.scores.find(value => ability === value.ability);

        return stat ?? undefined;
    }
}
