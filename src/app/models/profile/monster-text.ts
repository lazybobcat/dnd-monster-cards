import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("MonsterText")
export class MonsterText {
    @JsonProperty("title", String)
    public title: string = '';
    @JsonProperty("description", String)
    public description: string = '';
}
