var PetAge;
(function (PetAge) {
    var DogYears = (function () {
        function DogYears(weight, oDogage) {
            this.Weight = weight;
            this.ODogage = oDogage;
        }
        DogYears.prototype.calculateDogYears = function () {
            this.focalLength = 413.1781;
            this.startAge = 25.48807;
            this.startIncOffset = -2.35626;
            this.eqCorrection = 134.9106;
            this.ageIncOff = 2.369763;
            this.startAgeOffset = 585.2361;
            this.cutOffYear = 3;
            this.cutOffMonths = this.cutOffYear * 12;
            var dogWeight = this.Weight;
            if(dogWeight < 5) {
                dogWeight = 5;
            }
            var originalDogAge = this.ODogage;
            var dogAge = originalDogAge;
            if(originalDogAge < this.cutOffYear) {
                dogAge = this.cutOffYear;
            }
            var zb = ((dogWeight + this.startAgeOffset) * (dogWeight + this.startAgeOffset)) / (this.eqCorrection * this.focalLength);
            var winc = zb + this.startIncOffset;
            var humanAge = (winc * (dogAge - this.ageIncOff)) + this.startAge;
            if(originalDogAge < 3) {
                var humanAgeAt3 = humanAge;
                var underThreeFl = (humanAgeAt3 * humanAgeAt3) / (4 * this.cutOffMonths);
                var dogAgeInMonths = originalDogAge * 12;
                humanAge = Math.sqrt(4 * dogAgeInMonths * underThreeFl);
            }
            return Math.round(humanAge * 10) / 10;
        };
        return DogYears;
    })();
    PetAge.DogYears = DogYears;    
})(PetAge || (PetAge = {}));
