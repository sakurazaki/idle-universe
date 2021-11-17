import { ResourceEnumEnum } from './enums'

class Building {
	constructor(name){
		this.name = name;
		this.resources = [];

		this.level = 0;
		this.cost = {};
		this.base_cost = {};
		this.cost_increase = {};
		this.workers = 0;
	}
}

class Lumberjack extends Building {
	constructor(){
		super("Lumberjack");

		this.resources = [ResourceEnum.WOOD];

		this.level = 0;
		this.cost = {ResourceEnum.WOOD: 30, ResourceEnum.STONE: 10};
		this.base_cost = {
			ResourceEnum.WOOD: {value: 30, weight: .75},
			ResourceEnum.STONE: {value: 10, weight: .25}
		};
		this.cost_increase = {
			10: {
				ResourceEnum.WOOD: {value: 30, weight: .65},
				ResourceEnum.STONE: {value: 10, weight: .20},
				ResourceEnum.CEMENT: {value: 15, weight: .15}
			},
			50: {
				ResourceEnum.WOOD: {value: 30, weight: .60},
				ResourceEnum.STONE: {value: 10, weight: .20},
				ResourceEnum.CEMENT: {value: 15, weight: .15},
				ResourceEnum.STEEL: {value: 5, weight: .05}
			},
		};
	}
}

class Quarry extends Building {
	constructor(){
		super("Quarry");

		this.resources = [ResourceEnum.STONE];

		this.level = 0;
		this.cost = {ResourceEnum.WOOD: 20, ResourceEnum.STONE: 20};
		this.base_cost = {
			ResourceEnum.WOOD: {value: 20, weight: .5},
			ResourceEnum.STONE: {value: 20, weight: .5}
		};
		this.cost_increase = {
			10: {
				ResourceEnum.WOOD: {value: 20, weight: .45},
				ResourceEnum.STONE: {value: 20, weight: .45},
				ResourceEnum.CEMENT: {value: 15, weight: .10}
			},
			50: {
				ResourceEnum.WOOD: {value: 20, weight: .40},
				ResourceEnum.STONE: {value: 20, weight: .40},
				ResourceEnum.CEMENT: {value: 15, weight: .10},
				ResourceEnum.STEEL: {value: 15, weight: .10}
			},
		};
	}
}

class Farm extends Building {
	constructor(){
		super("Farm");

		this.resources = [ResourceEnum.FOOD];

		this.level = 0;
		this.cost = {ResourceEnum.WOOD: 20, ResourceEnum.STONE: 20};
		this.base_cost = {
			ResourceEnum.WOOD: {value: 20, weight: .5},
		};
		this.cost_increase = {
			10: {
				ResourceEnum.WOOD: {value: 20, weight: .45},
				ResourceEnum.STONE: {value: 20, weight: .45},
				ResourceEnum.CEMENT: {value: 15, weight: .10}
			},
			50: {
				ResourceEnum.WOOD: {value: 20, weight: .40},
				ResourceEnum.STONE: {value: 20, weight: .40},
				ResourceEnum.CEMENT: {value: 15, weight: .10},
				ResourceEnum.STEEL: {value: 15, weight: .10}
			},
		};
	}
}

class BuildingBuilder {
	constructor(){
		this.buildings = new Map();
		this.buildings.set("lumberjack", Lumberjack);
		this.buildings.set("quarry", Quarry);
		this.buildings.set("farm", Farm);
	}

	get(name){
		return new (this.buildings.get(name))();
	}

	print(){
		console.log(this.buildings);
	}
}

const buildingbuilder = new BuildingBuilder()

export { Building, buildingbuilder }