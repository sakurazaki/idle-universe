class Action {
	constructor({
		name,
		description,
		color='white',
		disabled=false,
		ishtml=false,
		execute=null
	}){
		this.name = name;
		this.description = description;
		this.color = color;
		this.disabled = disabled;
		this.ishtml = ishtml;
		this._execute = execute;
	}

	execute(){
		if(this._execute) this._execute();
	}
}

export { Action }