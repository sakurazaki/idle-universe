// eslint-disable-next-line
import { app } from '../../main'

import { encyclopedia } from '../encyclopedia'
import {
	Awake,
	EatCell,
	AbsorbLight,
	OxidateChemicals,
	OozeEatPlant,
	EvolvePhagocytosis,
	EvolvePhotosynthesis,
	EvolveChemosynthesis,
	OozeHunt,
	EvolveHerbivore,
	EvolveCarnivore,
	EvolveOmnivore
} from './protoplasm_actions'


const ProtoPhase = {
	KINGDOM: 'kingdom',
	FOOD: 'food'
}

const KingdomEvolutionFork = {
	PHAGOCYTOSIS: "phagocytosis",
	PHOTOSYNTHESIS: "photosynthesis",
	CHEMOSYNTHESIS: "chemosynthesis"
}

class ProtoplasmPhase {
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

		// Step 1
		this._cells_eaten = 0;
		this._light_absorbed = 0;
		this._chemical_oxidated = 0;
		this._evo_1_progress = 50;

		// Step 2
		this._plants_eaten = 0;
		this._proto_killed = 0;
		
	}

	// Step regulator
	get step(){
		return this._step;
	}

	set step(value){
		this._step = value;

		if(this._step == 1){
			this._setup_step_1();
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

	// Step 2
	get plants_eaten(){
		return this._plants_eaten;
	}

	set plants_eaten(val){
		this._plants_eaten = val;

		// check for evolution
		if(this._plants_eaten + this._proto_killed >= this._evo_1_progress){
			this._prepare_food_evolution();
		}
	}

	get proto_killed(){
		return this._proto_killed;
	}

	set proto_killed(val){
		this._proto_killed = val;

		// check for evolution
		if(this._plants_eaten + this._proto_killed >= this._evo_1_progress){
			this._prepare_food_evolution();
		}
	}

	// Private setup functions
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
		//const stage = this;

		switch(choice){
			case KingdomEvolutionFork.PHAGOCYTOSIS:
				app.game.race.genes.push(encyclopedia.genes.get(choice));
				break;

			default:
				break;
		}
	}

	_prepare_kingdom_evolution(){
		this.actions['grow'] = {
			name: "Grow",
			actions: [new OozeEatPlant(), new OozeHunt()]
		}
	}

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

export { KingdomEvolutionFork, ProtoplasmPhase }