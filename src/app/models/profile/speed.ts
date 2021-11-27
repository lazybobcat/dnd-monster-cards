import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * Speed is expressed in meters
 */
@JsonObject("Speed")
export class Speed {
    @JsonProperty("running", Number)
    public running: number = 9;
    @JsonProperty("climbing", Number)
    public climbing: number = 0;
    @JsonProperty("swimming", Number)
    public swimming: number = 0;
    @JsonProperty("flying", Number)
    public flying: number = 0;
}
