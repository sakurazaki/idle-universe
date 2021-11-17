class Universe {
	constructor(name){
		this.name = name;
	}
}

class Standard extends Universe {
	constructor(){
		super("Standard");
	}
}

class UniverseBuilder {
	constructor(){
		this.universes = new Map();
		this.universes.set("standard", new Standard());
	}

	get(name){
		return this.universes.get(name);
	}

	print(){
		console.log(this.universes);
	}
}

const universebuilder = new UniverseBuilder()

export { Universe, universebuilder }