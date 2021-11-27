import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("DamageImmunity")
export class DamageImmunity {
    @JsonProperty("type", String)
    public type: string = '';
    @JsonProperty("fromNonMagicalAttacks", Boolean)
    public fromNonMagicalAttacks: boolean = false;
}
