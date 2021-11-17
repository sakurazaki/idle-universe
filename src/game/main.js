import { encyclopedia } from './encyclopedia'

import { Resource } from './models/resource'

import { ProtoplasmPhase } from './stages/protoplasm'

class Game {
  constructor () {
    this.universe = encyclopedia.universes.get("standard");
    this.planet = encyclopedia.planets.get("earth");
    this.race = encyclopedia.races.get("micro_ooze");

    this.resources = {};
    this.race.primary_sources.forEach((name) => {
      this.resources[name] = new Resource(name);
    });

    this.stage = new ProtoplasmPhase();

  }
}

let game;

const get_game = function(){
  if(!game){
    game = new Game();
  }

  return game;
}

export { get_game }
