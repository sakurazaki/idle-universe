import { app } from '../../main'

import { Action } from './action'

import { ResourceEnum } from './enums'

const GeneType = {
	BASE: 'base',
	MINOR: 'minor',
	MAJOR: 'major',
	INHERITABLE: 'inheritable',
	UNLOCKABLE: 'unlockable',
	INJECTABLE: 'injectable',
	MODIFIABLE: 'modifiable',
	REMOVABLE: 'removable',
	UPGRADEABLE: 'upgradeable'
}

class Gene {
	constructor({
		id,
		name,
		description,
		effects,
		special,
		types,
		power
	}){
		this.id = id;
		this.identifier = name.replaceAll(' ', '_').toLowerCase();
		this.name = name;
		this.description = description;
		this.effects = effects;
		this.special = special;
		this.types = types;
		this.power = power; // weight of how poweful this gene is. Goes from -10 to +10
	}

	// eslint-disable-next-line no-unused-vars
	apply(stage){ console.log('Gene.apply() was called but was not implemented in child class.'); }
	// eslint-disable-next-line no-unused-vars
	remove(stage){ console.log('Gene.remove() was called but was not implemented in child class.'); }
	info(){ return `[${this.id}]Gene: ${this.name}`; }
}

class Protocell extends Gene {
	constructor(){
		super({
			id: 0,
			name: 'Protocell',
			description: 'An exciting new adventure into evolution.',
			special: 'Allows you to explore different paths.',
			types: [GeneType.BASE],
			power: 0
		})
	}
}

class Phagocyte extends Gene {
	constructor(){
		super({
			id: 0,
			name: 'Phagocyte',
			description: 'Devouring organic matter is the path to survival.',
			special: 'Your first step into the animal kingdom.',
			types: [GeneType.BASE],
			power: 0
		})
	}

	apply(stage){
		stage.actions['explore']['actions'].push(
			new Action({
				name: 'Hunt cells',
				description: 'Hunt cells and absorb their matter for nutrition.',
				color: 'red',
				execute: () => {
					app.game.resources[ResourceEnum.SATIETY].value += 2 * stage.population;
					stage.cells_killed += 1;
				}
			}),
			new Action({
				name: 'Eat plants',
				description: 'Find plant based matter around you and consume it.',
				color: 'green',
				execute: () => {
					app.game.resources[ResourceEnum.SATIETY].value += 2 * stage.population;
					stage.plants_eaten += 1;
				}
			})
		);
	}
}

class Photocyte extends Gene {
	constructor(){
		super({
			id: 0,
			name: 'Photocyte',
			description: 'The light provides all the nutrients you need.',
			effects: [{description: 'Passively generate 1 satiety per cell.', color: 'green'}],
			special: 'Your first step into the plant kingdom.',
			types: [GeneType.BASE],
			power: 0
		})
	}

	apply(stage){
		app.game.resources[ResourceEnum.SATIETY].add_rps({source: 'Photocyte', value: () => 1 * stage.population});

		stage.actions['explore']['actions'].push(
			new Action({
				name: 'Hunt cells',
				description: 'Hunt cells and absorb their matter for nutrition.',
				color: 'red',
				execute: () => {
					app.game.resources[ResourceEnum.SATIETY].value += 2 * stage.population;
					stage.cells_killed += 1;
				}
			})
		);
	}
}

class Chemocyte extends Gene {
	constructor(){
		super({
			id: 0,
			name: 'Chemocyte',
			description: 'Absorbing chemicals in your body strenghtens your molecules.',
			special: 'Your first step into the abyss kingdom.',
			types: [GeneType.BASE],
			power: 0
		})
	}

	apply(stage){
		stage.actions['explore']['actions'].push(
			new Action({
				name: 'Vaporize chemicals',
				description: 'Vaporize chemical nutrients from volcanic sources.',
				color: 'red',
				execute: () => {
					app.game.resources[ResourceEnum.SATIETY].value += 2 * stage.population;
					stage.vaporized += 1;
				}
			}),
			new Action({
				name: 'Dissolve chemicals',
				description: 'Find and dissolve chemicals found deep in sea vents.',
				color: 'blue',
				execute: () => {
					app.game.resources[ResourceEnum.SATIETY].value += 2 * stage.population;
					stage.dissolved += 1;
				}
			})
		);
	}
}

class Herbivore extends Gene {
	constructor(){
		super({
			id: 0,
			name: 'Herbivore',
			description: 'You prefer to eat vegetables and won\'t eat meat.',
			special: 'Your species won\'t hunt for food.',
			types: [GeneType.BASE],
			power: -1
		})
	}
}

class Carnivore extends Gene {
	constructor(){
		super({
			id: 0,
			name: 'Carnivore',
			description: 'You prefer to eat meat and won\'t eat vegetables.',
			special: 'Your species won\'t engage in agriculture for food.',
			types: [GeneType.BASE],
			power: -1
		})
	}
}

class Omnivore extends Gene {
	constructor(){
		super({
			id: 0,
			name: 'Omnivore',
			description: 'You enjoy every source of meal equally.',
			special: 'Your species will engage in agriculture and hunt for food.',
			types: [GeneType.BASE],
			power: 1
		})
	}
}

class GeneBuilder {
	constructor(){
		this.genes = new Map();
		this.genes.set("protocell", new Protocell());
		this.genes.set("phagocytosis", new Phagocyte());
		this.genes.set("photosynthesis", new Photocyte());
		this.genes.set("chemosynthesis", new Chemocyte());
		this.genes.set("herbivore", new Herbivore());
		this.genes.set("carnivore", new Carnivore());
		this.genes.set("omnivore", new Omnivore());
	}

	get(name){
		return this.genes.get(name);
	}

	print(){
		console.log(this.genes);
	}
}

const genebuilder = new GeneBuilder();

export { GeneType, Gene, genebuilder }