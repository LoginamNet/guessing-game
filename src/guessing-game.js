class GuessingGame {
    constructor() {
        this.minRange;
        this.maxRange;
        this.num;
    }
        
    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        this.num = (this.maxRange - this.minRange) / 2;
        return this.num;
    }

    lower() {
        this.maxRange = this.num;
    }

    greater() {
        this.minRange = this.num;
    }
}

module.exports = GuessingGame;
