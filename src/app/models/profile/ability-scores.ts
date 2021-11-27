import { AbilitiesEnum } from 'src/app/models/profile/abilities.enum';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("AbilityScore")
export class AbilityScore {
    @JsonProperty("ability", Number)
    public ability: AbilitiesEnum = AbilitiesEnum.STRENGTH;
    @JsonProperty("score", Number)
    public score: number = 10;

    constructor(ability: AbilitiesEnum = AbilitiesEnum.STRENGTH, score: number = 10) {
        this.ability = ability;
        this.score = score;
    }
}

@JsonObject("AbilityScores")
export class AbilityScores {
    @JsonProperty("scores", [AbilityScore])
    public scores: AbilityScore[];

    public constructor(scores: AbilityScore[]) {
        this.scores = scores;
    }


    get strength(): number {
        return this.getAbilityScore(AbilitiesEnum.STRENGTH) ?? 0;
    }
    set strength(value: number) {
        let stat = this.getAbility(AbilitiesEnum.STRENGTH);
        if (stat) {
            stat.score = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.STRENGTH, score: value});
        }
    }

    get dexterity(): number {
        return this.getAbilityScore(AbilitiesEnum.DEXTERITY) ?? 0;
    }
    set dexterity(value: number) {
        let stat = this.getAbility(AbilitiesEnum.DEXTERITY);
        if (stat) {
            stat.score = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.DEXTERITY, score: value});
        }
    }

    get constitution(): number {
        return this.getAbilityScore(AbilitiesEnum.CONSTITUTION) ?? 0;
    }
    set constitution(value: number) {
        let stat = this.getAbility(AbilitiesEnum.CONSTITUTION);
        if (stat) {
            stat.score = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.CONSTITUTION, score: value});
        }
    }

    get intelligence(): number {
        return this.getAbilityScore(AbilitiesEnum.INTELLIGENCE) ?? 0;
    }
    set intelligence(value: number) {
        let stat = this.getAbility(AbilitiesEnum.INTELLIGENCE);
        if (stat) {
            stat.score = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.INTELLIGENCE, score: value});
        }
    }

    get wisdom(): number {
        return this.getAbilityScore(AbilitiesEnum.WISDOM) ?? 0;
    }
    set wisdom(value: number) {
        let stat = this.getAbility(AbilitiesEnum.WISDOM);
        if (stat) {
            stat.score = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.WISDOM, score: value});
        }
    }

    get charisma(): number {
        return this.getAbilityScore(AbilitiesEnum.CHARISMA) ?? 0;
    }
    set charisma(value: number) {
        let stat = this.getAbility(AbilitiesEnum.CHARISMA);
        if (stat) {
            stat.score = value;
        } else {
            this.scores.push({ability: AbilitiesEnum.CHARISMA, score: value});
        }
    }

    public getAbilityScore(ability: AbilitiesEnum): number | undefined {
        const stat = this.getAbility(ability);

        return stat ? stat.score : 0;
    }

    public getAbility(ability: AbilitiesEnum): AbilityScore | undefined {
        const stat = this.scores.find(value => ability === value.ability);

        return stat ? stat : undefined;
    }
}
