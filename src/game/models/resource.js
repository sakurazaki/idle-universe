class Resource {
  constructor(name, display=true){
    this.name = name;
    this.display = display; // whether to display it on the interface
    this.identifier = name.replaceAll(" ", "_").toLowerCase();
    this.value = 0; // value to display
    this.amount = 0; // amount per click
    this.rps = 0; // rate per second
    this.storage = 0;
    this.extra_storage = 0;
  }
}

export { Resource }