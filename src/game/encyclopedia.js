import { genebuilder } from './models/gene';
import { racebuilder } from './models/race';
import { planetbuilder } from './models/planet';
import { universebuilder } from './models/universe';

class Encyclopedia {
	constructor() {
		this.races = racebuilder;
		this.genes = genebuilder;
		this.planets = planetbuilder;
		this.universes = universebuilder;
	}
}

const encyclopedia = new Encyclopedia()

export { encyclopedia }
