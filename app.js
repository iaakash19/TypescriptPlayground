var AlertLevel;
(function (AlertLevel) {
    AlertLevel[AlertLevel["info"] = 0] = "info";
    AlertLevel[AlertLevel["warning"] = 1] = "warning";
    AlertLevel[AlertLevel["alert"] = 2] = "alert";
})(AlertLevel || (AlertLevel = {}));
function alertSubscribersLevel(level) {
    var emails;
    switch (level) {
        case AlertLevel.info:
            emails.push('aakash.ohri19@gmail.com');
            break;
        case AlertLevel.warning:
            emails.push('chandler@cbs.com');
            emails.push('twohmen@cbs.com');
            break;
        case AlertLevel.alert:
            emails.push('aakash.ohri19@gmail.com');
            emails.push('chandler@cbs.com');
            emails.push('Charlie@thf.com');
            break;
        default:
            throw new Error('Invalid Argument!!');
    }
    return emails;
}
alertSubscribersLevel(AlertLevel.warning);
// Use of for-in
var data = { a: 1, b: 3, c: 6 };
for (var key in data) {
    console.log(key, ":", data[key]);
}
/************
//========Functions
*************/
var greetUnnamed;
greetUnnamed = function (name) {
    if (name) {
        return 'Hello' + name;
    }
};
//Or
var greet = function (name) {
    if (name) {
        return 'Hello' + name;
    }
};
function strangeAdd(foo: number, bar:number, zooey:number) {
    return foo + bar + zooey;
}
strangeAdd(12, 13, 15);

function strangerAdd(foo: number, bar: number, zooey?: number) {
	
	// var result = foo+bar;
	// if( zooey !== undefined ) {
	// 	result += zooey;
	// }
	// return result;

	return foo + bar + ( zooey !== undefined ? zooey : 0 );
}

// Function with multiple Args

function addInfinite(...fillMeUp: number[]): number {
	var res = 0;

	for(var i=0; i<=filllMeUp.length; i++){
		res += fillMeUp[i];
	}

	return res;
}



// Example 1


class Person{
	public name: string;
	public sirname: string;
	public email: Email;

	constructor(name: string, sirname: string, email: Email) {
		this.name = name;
		this.sirname = sirname;
		this.email = email;
	greetEmail(){
		alert("Hi!! My Name is "+ this.name +" "+ this.sirname+". You can reach me at "+this.email);
	}
}

class Email{
	
	private email: string;

	constructor(email: string) {
		if(this.validateEmail(email)) {
			this.email = email;
		}
	}

	private validateEmail(email){
		var pattern = /\S+\@+\.+\S/;
		return pattern.test(email);
	}

	get(): string {
		return this.email;
	}

}

var email  = new Email('aakash.ohri19@gmail.com');

