//import { buildingbuilder } from './building';

class Planet {
  constructor (name, races) {
    this.name = name
    this.races = races

    this.population = 1
    this.actions = []
    this.buildings = []
  }
}

class Earth extends Planet {
  constructor(){
    super("Earth", ["human", "elf", "orc"]);
  }
}

class PlanetBuilder {
  constructor(){
    this.planets = new Map();
    this.planets.set("earth", Earth);
  }

  get(name){
    return new (this.planets.get(name))();
  }

  print(){
    console.log(this.planets);
  }
}

const planetbuilder = new PlanetBuilder()

export { Planet, planetbuilder }