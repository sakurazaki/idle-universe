import { encyclopedia } from './encyclopedia'

import { ProtocellPhase } from './stages/protocell'

class Game {
  constructor () {

    this._update_cycle = null;

    this.universe = encyclopedia.universes.get("standard");
    this.planet = encyclopedia.planets.get("earth");
    this.race = encyclopedia.races.get("micro_ooze");

    this.resources = {};
    this.stage = new ProtocellPhase();

  }

  init(){
    this._update_cycle = setInterval(() => {this.update();}, 100);
  }

  update(){
    this.stage.update();

    Object.entries(this.resources).forEach((resource) => {
      resource[1].update();
    });
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
