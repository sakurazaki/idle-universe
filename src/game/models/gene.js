const GeneType = {
	BASE: "base",
	MINOR: "minor",
	MAJOR: "major",
	INHERITABLE: "inheritable",
	UNLOCKABLE: "unlockable",
	INJECTABLE: "injectable",
	MODIFIABLE: "modifiable",
	REMOVABLE: "removable",
	UPGRADEABLE: "upgradeable"
}

class Gene {
	constructor(id, name, description, effect, types, power){
		this.id = id;
		this.identifier = name.replaceAll(" ", "_").toLowerCase();
		this.name = name;
		this.description = description;
		this.effect = effect;
		this.types = types;
		this.power = power; // weight of how poweful this gene is. Goes from -10 to +10
	}

	apply(game){ console.log(game); }
	remove(game){ console.log(game); }
	info(){ return `[${this.id}]Gene: ${this.name}`; }
}

class Protoplasm extends Gene {
	constructor(){
		super(0, "Protoplasm",
			"A exciting new adventure into evolution.",
			"Allows you to explore different paths.",
			[GeneType.BASE],
			0)
	}
}

class Herbivore extends Gene {
	constructor(){
		super(1, "Herbivore",
			"You prefer to eat vegetables and won't eat meat.",
			"Your species won't hunt for food.",
			[GeneType.BASE],
			-1)
	}
}

class Carnivore extends Gene {
	constructor(){
		super(2, "Carnivore", 
			"You prefer to eat meat and won't eat vegetables.",
			"Your species won't engage in agriculture for food.",
			[GeneType.BASE],
			-1)
	}
}

class Omnivore extends Gene {
	constructor(){
		super(3, "Omnivore", 
			"You enjoy every source of meal equally.",
			"Your species will engage in agriculture and hunt for food.",
			[GeneType.BASE],
			1)
	}
}

class GeneBuilder {
	constructor(){
		this.genes = new Map();
		this.genes.set("protoplasm", new Protoplasm());
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