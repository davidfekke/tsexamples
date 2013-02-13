module PetAge {
	export class DogYears {
		private Weight:number;
		private ODogage:number;
		private focalLength:number;
		private startAge:number;
		private startIncOffset:number;
		private eqCorrection:number;
		private ageIncOff:number;
		private startAgeOffset:number;
		private cutOffYear:number;
		private cutOffMonths:number;
		constructor(weight:number, oDogage:number) {
			this.Weight = weight;
			this.ODogage = oDogage;
		}
		
		calculateDogYears():number {
			this.focalLength = 413.1781;
			this.startAge = 25.48807;
			this.startIncOffset = -2.35626;
			this.eqCorrection = 134.9106;
			this.ageIncOff = 2.369763;
			this.startAgeOffset = 585.2361;
			this.cutOffYear = 3;
			this.cutOffMonths = this.cutOffYear * 12;
			
			var dogWeight:number = this.Weight;
			if (dogWeight < 5) {
				dogWeight = 5;
			}
			
			var originalDogAge:number = this.ODogage;
			var dogAge:number = originalDogAge;

			if ( originalDogAge < this.cutOffYear ) {
				dogAge = this.cutOffYear ;
			}

			var zb:number = ((dogWeight + this.startAgeOffset) * (dogWeight + this.startAgeOffset))/(this.eqCorrection * this.focalLength);
			var winc:number = zb + this.startIncOffset;

			var humanAge:number = (winc * (dogAge - this.ageIncOff)) + this.startAge;

			if ( originalDogAge < 3) {
				var humanAgeAt3:number = humanAge;
				var underThreeFl:number = (humanAgeAt3 * humanAgeAt3)/(4 * this.cutOffMonths);
				var dogAgeInMonths:number = originalDogAge * 12;
				humanAge = Math.sqrt(4 * dogAgeInMonths * underThreeFl); 
			}
			return Math.round(humanAge * 10)/10;
		}
	}
}

//(module).exports = PetAge;