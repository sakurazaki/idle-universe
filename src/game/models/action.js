import { app } from '../../main'

class Action {
	constructor({
		name,
		description,
		color='white',
		disabled=false,
		ishtml=false
	}){
		this.name = name;
		this.description = description;
		this.color = color;
		this.disabled = disabled;
		this.ishtml = ishtml;
	}

	execute(){}
}

class OozeEatPlant extends Action {
	constructor(){
		super({
			name: "Eat Plants",
			description: "Find plant based matter around you and consume it.",
			color: 'green'
		});
	}

	execute(){
		app.game.stage.plants_eaten += 1;
	}
}

class OozeHunt extends Action {
	constructor(){
		super({
			name: "Hunt organisms",
			description: "Hunt other living organisms and cosume their corpses.",
			color: 'red'
		});
	}

	execute(){
		app.game.stage.proto_killed += 1;
	}
}

class EvolveHerbivore extends Action {
	constructor(){
		let description = '';

		if(app.game.stage.proto_killed > 0){
			description = `
			Your species has tasted the blood of other living organisms<br />
			so you're not fit for the herbivore life style.<br />
			<br />
			<span class="evolution-fork-disabled">Evolutionary fork disabled</span>`;
		} else {
			description = `
			Evolve into species that live only off the land.<br />
			<br />
			<span class="evolution-fork-info">This is an evolutionary fork</span>`;
		}
		
		super({
			name: "Hervibore",
			description: description,
			color: 'green',
			disabled: app.game.stage.proto_killed > 0,
			ishtml: true
		});
	}

	execute(){
		app.game.stage.food_evolve("herbivore");
	}
}

class EvolveCarnivore extends Action {
	constructor(){
		let description = '';

		if(app.game.stage.plants_eaten > 0){
			description = `
			Your species has delighted in the commodities from plant matter<br />
			and refuses to eat only meat to survive.<br />
			<br />
			<span class="evolution-fork-disabled">Evolutionary fork disabled</span>`;
		} else {
			description = `
			Evolve into species that will only hunt to eat.<br />
			<br />
			<span class="evolution-fork-info">This is an evolutionary fork</span>`;
		}
		
		super({
			name: "Carnivore",
			description: description,
			color: 'red',
			disabled: app.game.stage.plants_eaten > 0,
			ishtml: true
		});
	}

	execute(){
		app.game.stage.food_evolve("carnivore");
	}
}

class EvolveOmnivore extends Action {
	constructor(){
		let description = `
		Evolve into species that will eat anything to survive.<br />
		<br />
		<span class="evolution-fork-info">This is an evolutionary fork</span>`;
		
		super({
			name: "Omnivore",
			description: description,
			color: 'grad-gr',
			ishtml: true
		});
	}

	execute(){
		app.game.stage.food_evolve("omnivore");
	}
}

export { OozeEatPlant, OozeHunt, EvolveHerbivore, EvolveCarnivore, EvolveOmnivore }