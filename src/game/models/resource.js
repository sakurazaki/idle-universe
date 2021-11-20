import { app } from '../../main'

class Resource {
  constructor({
    name,
    display=true,
    value=0,
    has_rps=true,
    rps=null,
    dps=null,
    storage=null,
    extra_storage=null
  }){
    this.name = name;
    this.identifier = name.replaceAll(' ', '_').toLowerCase();
    this.display = display; // whether to display it on the interface
    this._value = value; // value to display

    // rate per second applicable from different sources
    // [{source: 'gene', value: () => { return 2 * population; }}]
    this._rps = [];
    if(rps) this._rps = rps;
    this.has_rps = has_rps;

    // drain per second applicable from different sources
    // [{source: 'gene', value: () => { return 2 * population; }}]
    this._dps = [];
    if(dps) this._dps = dps;

    this.mult = 1.0; // multiplicative additive value to rps

    // This is base storage. If it returns 0 then we assume it has no storage and its infinite.
    this._storage = () => 0;
    if(storage) this._storage = storage;

    // This is extra storage from different sources.
    // [{source: 'gene', value: () => { return 2 * population; }}]
    this._extra_storage = [];
    if(extra_storage) this._extra_storage = extra_storage;
  }

  update(){
    this.value += ((this.rps * this.mult) - this.dps) / 10.0; // we execute this function 10 times per second
  }

  get value(){
    return this._value;
  }

  set value(value){
    this._value = value;

    if(this._value < 0) this._value = 0;
    if(this._value > this.all_storage) this._value = this.all_storage;
  }

  get rps(){
    return this._rps.reduce((total, source) => total + source.value(), 0);
  }

  get rps_sources(){
    return this._rps;
  }

  add_rps(source){
    console.log("adding source". source);
    this._rps.push(source);
  }

  remove_rps(source){
    this._rps = this._rps.filter(item => item.source != source.source);
  }

  get dps(){
    return this._dps.reduce((total, source) => total + source.value(), 0);
  }

  get dps_sources(){
    return this._dps;
  }

  add_dps(source){
    this._dps.push(source);
  }

  remove_dps(source){
    this._dps = this._dps.filter(item => item.source != source.source);
  }

  get all_storage(){
    return this.storage + this.extra_storage;
  }

  get storage(){
    return this._storage();
  }

  get extra_storage(){
    return this._extra_storage.reduce((total, source) => total + source.value(), 0);
  }

  get storage_sources(){
    return this._extra_storage;
  }

  add_storage(source){
    this._extra_storage.push(source);
  }

  remove_storage(source){
    this._extra_storage = this._extra_storage.filter(item => item.source != source.source);
  }
}

class Satiety extends Resource {
  constructor(){
    super({
      name: "Satiety",
      value: 50 * app.game.stage.population,
      storage: () =>{
        return 50 * app.game.stage.population;
      }
    });
  }
}

class DNA extends Resource {
  constructor(){
    super({
      name: "DNA",
      storage: () =>{
        return 5 * app.game.stage.population;
      }
    });
  }
}

class RNA extends Resource {
  constructor(){
    super({
      name: "RNA",
      has_rps: false,
      storage: () =>{
        return 20 * app.game.stage.population;
      }
    });
  }
}

class Protein extends Resource {
  constructor(){
    super({
      name: "Protein",
      has_rps: false
    });
  }
}

export {
  Resource,
  Satiety,
  DNA,
  RNA,
  Protein,
}