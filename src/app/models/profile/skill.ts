import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("Skill")
export class Skill {
    @JsonProperty("name", String)
    public name: string;
    @JsonProperty("modifier", Number)
    public modifier: number;

    constructor(name: string, modifier: number) {
        this.name = name;
        this.modifier = modifier;
    }

    public modifierAsString(): string {
        if (this.modifier > 0) {
            return "+" + this.modifier;
        }

        return this.modifier.toString();
    }
}
