// eslint-disable-next-line
import { app } from '../../main'

import { encyclopedia } from '../encyclopedia'
import {
	Awake,
	EatCell,
	AbsorbLight,
	OxidateChemicals,
	EvolvePhagocytosis,
	EvolvePhotosynthesis,
	EvolveChemosynthesis,
	EvolveHerbivore,
	EvolveCarnivore,
	EvolveOmnivore
} from './protocell_actions'

import {
	Satiety,
	DNA,
	RNA,
	Protein
} from '../models/resource'

import { ResourceEnum } from '../models/enums'


const ProtoPhase = {
	KINGDOM: 'kingdom',
	FOOD: 'food'
}

const KingdomEvolutionFork = {
	PHAGOCYTOSIS: "phagocytosis",
	PHOTOSYNTHESIS: "photosynthesis",
	CHEMOSYNTHESIS: "chemosynthesis"
}

class ProtocellPhase {
	constructor(){
		this.name = 'Protoplasm';

		this.stage = ProtoPhase.KINGDOM;
		this._step = 0;

		// This controls the progress bar
		this.show_progress = false;
		this.progress = {};

		// Actions shown on the screen
		this.actions = {
			explore: {
				name: 'Explore',
				description: 'A small cell living in a microscopic world.<br />Your first steps into an adventure of evolution begin.',
				actions: [new Awake()]
			}
		};

		// Kingdom stage
		this.population = 0; // you start with 1 cell always however we dont get 1 until step 2
		this._population_death_rate = 0; // used to determine pop dying when food is 0

		// Step 1
		this._cells_eaten = 0;
		this._light_absorbed = 0;
		this._chemical_oxidated = 0;
		this._evo_1_progress = 50;

		// Step 2
		this.cells_killed = 0;
		this.plants_eaten = 0;
		this.vaporized = 0;
		this.dissolved = 0;
		this.evo_2_progress = 1200;
		
	}

	// Function called every .1s
	update(){
	}

	// Step regulator
	get step(){
		return this._step;
	}

	set step(value){
		this._step = value;

		if(this._step == 1){
			this._setup_step_1();
		} else if(this._step == 2){
			this._setup_step_2();
		}
	}

	// Kingdom - Step 1
	get cells_eaten(){
		return this._cells_eaten;
	}

	set cells_eaten(value){
		this._cells_eaten = value;

		// check evolution
		if(this._cells_eaten + this._light_absorbed + this._chemical_oxidated >= this._evo_1_progress){
			this._setup_step_1_2();
		}
	}

	get light_absorbed(){
		return this._light_absorbed;
	}

	set light_absorbed(value){
		this._light_absorbed = value;

		// check evolution
		if(this._cells_eaten + this._light_absorbed + this._chemical_oxidated >= this._evo_1_progress){
			this._setup_step_1_2();
		}
	}

	get chemical_oxidated(){
		return this._chemical_oxidated;
	}

	set chemical_oxidated(value){
		this._chemical_oxidated = value;

		// check evolution
		if(this._cells_eaten + this._light_absorbed + this._chemical_oxidated >= this._evo_1_progress){
			this._setup_step_1_2();
		}
	}

	_setup_step_1(){
		const stage = this;

		app.game.race.genes.push(encyclopedia.genes.get("protocell"));

		stage.actions = {
			explore: {
				name: 'Explore',
				description: 'You feel the urge to get new cells in your body.',
				actions: [new EatCell(), new AbsorbLight(), new OxidateChemicals()]
			}
		};

		stage.progress = {
			total: stage._evo_1_progress,
			bars: [
				{color: 'red', cb: function(){ return stage.cells_eaten * 2; }},
				{color: 'green', cb: function(){ return stage.light_absorbed * 2; }},
				{color: 'blue', cb: function(){ return stage.chemical_oxidated * 2; }}
			],
			progress: {
				complete: function(){
					return stage.cells_eaten + stage.light_absorbed + stage.chemical_oxidated >= stage._evo_1_progress;
				},
				cb: function(){
					const total = ((stage.cells_eaten + stage.light_absorbed + stage.chemical_oxidated) / stage._evo_1_progress) * 100;
					return Math.min(total, 100);
				}
			}
		};
		stage.show_progress = true;
	}

	_setup_step_1_2(){
		const stage = this;

		stage.actions = {
			evolve: {
				name: 'Evolve',
				description: 'You can feel a change within your nucleus.<br />A new path is opening...',
				actions: [new EvolvePhagocytosis(), new EvolvePhotosynthesis(), new EvolveChemosynthesis()]
			}
		};
	}

	kingdom_fork_evolution(choice){
		const stage = this;
		app.game.race.genes.pop();

		switch(choice){
			case KingdomEvolutionFork.PHAGOCYTOSIS:
				app.game.race.genes.push(encyclopedia.genes.get(choice));
				break;

			case KingdomEvolutionFork.PHOTOSYNTHESIS:
				app.game.race.genes.push(encyclopedia.genes.get(choice));
				break;

			case KingdomEvolutionFork.CHEMOSYNTHESIS:
				app.game.race.genes.push(encyclopedia.genes.get(choice));
				break;

			default:
				break;
		}

		stage.show_progress = false;
		stage.progress = null;
		delete stage.actions['evolve'];

		this.step += 1;
	}

	// Kingdom - Step 2
	_setup_step_2(){
		const stage = this;

		this.population = 1;

		stage.actions = {
			explore: {
				name: 'Explore',
				description: 'The world has expanded around you. Take a long look and discover new fundaments of life.',
				actions: []
			},
			evolve: {
				name: 'Evolve',
				description: 'Using the power of genetics start improving yourself and expanding your species.',
				actions: []
			}
		};

		const satiety = new Satiety();
		satiety.add_dps({'source': 'population', value: () => this.population});
		app.game.resources[ResourceEnum.SATIETY] = satiety;

		const dna = new DNA();
		dna.add_rps({'source': 'population', value: () => this.population});
		app.game.resources[ResourceEnum.DNA] = dna;

		app.game.resources[ResourceEnum.RNA] = new RNA();
		app.game.resources[ResourceEnum.PROTEIN] = new Protein();

		app.game.race.genes.forEach((gene) => {
			gene.apply(this);
		});
	}

	// Private setup functions
	_prepare_food_evolution(){
		this.actions['evolve'] = {
			name: 'Evolve in the food chain',
			actions: [
				new EvolveHerbivore(),
				new EvolveCarnivore(),
				new EvolveOmnivore()
			]
		};
	}

	food_evolve(path){
		app.game.race.genes.push(encyclopedia.genes.get(path));
		delete this.actions['evolve'];
	}
}

export { KingdomEvolutionFork, ProtocellPhase }