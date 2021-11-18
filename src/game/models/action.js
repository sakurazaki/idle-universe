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

export { Action }