import { vm } from '../../main'

class Action {
	constructor(name, description, color='white'){
		this.name = name;
		this.description = description;
		this.color = color;
	}

	execute(){}
}

class OozeEatPlant extends Action {
	constructor(){
		super("Eat Plants", "Find plant based matter around you and consume them.", 'green')
	}

	execute(){
		vm.game.stage.plants_eaten += 1;
		vm.game.stage.has_eaten_plants = true;
	}
}

class OozeHunt extends Action {
	constructor(){
		super("Hunt organisms", "Hunt other living organisms and cosume their corpses.", 'red')
	}

	execute(){
		vm.game.stage.proto_killed += 1;
		vm.game.stage.has_eaten_plants = true;
	}
}

export { OozeEatPlant, OozeHunt }