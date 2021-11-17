import { OozeEatPlant, OozeHunt } from '../models/action'

class ProtoplasmPhase {
	constructor(){
		this.name = 'Protoplasm';

		this.plants_eaten = 0;
		this.proto_killed = 0;
    this.has_eaten_plants = false;
    this.has_eaten_proto = false;


		this.actions = {
			grow: {
				name: "Grow",
				actions: [new OozeEatPlant(), new OozeHunt()]
			}
		};

    this.evo_1_progress = 50;
	}
}

export { ProtoplasmPhase }