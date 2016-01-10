enum AlertLevel{
	info,
	warning,
	alert
}

function alertSubscribersLevel(level: AlertLevel) {
	var emails: String[];
	switch(level) {
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

var data: any = { a: 1, b: 3, c: 6 };

for(var key in data) {
	console.log(key, ":", data[key]);
}

/************
//========Functions
*************/

var greetUnnamed: (name: string) => string;

greetUnnamed = function(name: string): string{
	if (name) {
		return 'Hello' + name;
	}
}

//Or

var greet: (name: string) => string = function(name: string): string {
	if(name) {
		return 'Hello' + name;
	}
}

function strangeAdd(foo: number, bar: number, zooey: number) {
	return foo + bar + zooey;
}
strangeAdd(12, 13, 15);

