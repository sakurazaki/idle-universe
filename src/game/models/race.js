import { icons } from '../utils/icons'

import { genebuilder } from './gene'
import { ResourceEnum } from './enums'

const RaceType = {
	OOZE: "ooze",
	HUMANOID: "humanoid",
	BEAST: "beast",
	FISH: "fish",
	AVIAN: "avian",
	DEMONIC: "demonic",
	ABERRATION: "aberration",
	INCORPOREAL: "incorporeal"
}

class Race {
	// UI related
	color = "ffffff";

	constructor(id, name, genes, type, home, primary_sources, color){
		this.id = id;
		this.identifier = name.replaceAll(" ", "_").toLowerCase();
		this.name = name;
		this.genes = genes;
		this.type = type;
		this.home = home;

		this.primary_sources = primary_sources;

		this.color = color;
	}

	get icon(){
		const icon_name = `./races/${this.identifier}.svg`;
		return `<img src="${icons[icon_name]}" class="race-icon" />`;
	}
}

class MicroOoze extends Race {
	constructor(){
		super(0,
			"Micro Ooze",
			[genebuilder.get("protoplasm")],
			RaceType.OOZE,
			"",
			[ResourceEnum.PROTEIN, ResourceEnum.DNA, ResourceEnum.RNA],
			"ffffff"
		);
	}
}

class Human extends Race {
	constructor(){
		super(1,
			"Human",
			[genebuilder.get("omnivore")],
			RaceType.HUMANOID,
			"Earth",
			[ResourceEnum.FOOD, ResourceEnum.WOOD, ResourceEnum.STONE],
			"36a3cd" // Light blue
		);
	}
}

class Elf extends Race {
	constructor(){
		super(2,
			"Elf",
			[genebuilder.get("herbivore")],
			RaceType.HUMANOID,
			"Lanthalas",
			[ResourceEnum.FOOD, ResourceEnum.WISP, ResourceEnum.STONE],
			"36a3cd"
		);
	}
}

class Orc extends Race {
	constructor(){
		super(3,
			"Orc",
			[genebuilder.get("carnivore")],
			RaceType.HUMANOID,
			"Mag'roth",
			[ResourceEnum.MEAT, ResourceEnum.WOOD, ResourceEnum.STONE],
			"36a3cd"
		);
	}
}

class RaceBuilder {
	constructor(){
		this.races = new Map();
		this.races.set("micro_ooze", new MicroOoze())
		this.races.set("human", new Human());
		this.races.set("elf", new Elf());
		this.races.set("orc", new Orc());
	}

	get(name) {
		return this.races.get(name);
	}

	print(){
		console.log(this.races);
	}
}

const racebuilder = new RaceBuilder()

export { RaceType, Race, racebuilder }