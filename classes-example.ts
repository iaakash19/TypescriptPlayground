class Character{
	fullname: string;

	constructor(firstname: string, lastname: string){
		this.fullname = firstname + lastname;
	}

	greet(name ? : string): string{
		if(name) {
			return 'Hello my name is' + name + 'I Welcome you to World of Javascript'+ this.fullname;
		}else{
			return 'Welcome' + this.fullname + ' to the world of Javascript';
		}
	}
}

var p1 = new Character('Joey', 'Tribbiani');
var msg = p1.greet('Chandler');

alert(msg);