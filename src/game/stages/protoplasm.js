import { app } from '../../main'

import { OozeEatPlant, OozeHunt, EvolveHerbivore, EvolveCarnivore, EvolveOmnivore } from '../models/action'
import { encyclopedia } from '../encyclopedia'

class ProtoplasmPhase {
	constructor(){
		this.name = 'Protoplasm';

		this._plants_eaten = 0;
		this._proto_killed = 0;

		this.actions = {
			grow: {
				name: "Grow",
				actions: [new OozeEatPlant(), new OozeHunt()]
			}
		};

		this.evo_1_progress = 50;
	}

	get plants_eaten(){
		return this._plants_eaten;
	}

	set plants_eaten(val){
		this._plants_eaten = val;

		// check for evolution
		if(this._plants_eaten + this._proto_killed >= this.evo_1_progress){
			this._prepare_food_evolution();
		}
	}

	get proto_killed(){
		return this._proto_killed;
	}

	set proto_killed(val){
		this._proto_killed = val;

		// check for evolution
		if(this._plants_eaten + this._proto_killed >= this.evo_1_progress){
			this._prepare_food_evolution();
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

export { ProtoplasmPhase }