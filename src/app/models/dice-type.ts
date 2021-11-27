export class DiceType {
    constructor(public maxValue: number) {
        if (this.maxValue < 0) {
            this.maxValue *= -1;
        }
    }

    public getDiceAverage(): number {
        if (0 === this.maxValue) {
            return 0;
        }

        let sum = 0;

        for (let i = 1; i <= this.maxValue; ++i) {
            sum += i;
        }

        return sum / this.maxValue;
    }

    public toString(): string {
        return 'd' + this.maxValue;
    }
}
