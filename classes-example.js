var Character = (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + lastname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            return 'Hello my name is' + name + 'I Welcome you to World of Javascript' + this.fullname;
        }
        else {
            return 'Welcome' + this.fullname + ' to the world of Javascript';
        }
    };
    return Character;
})();
var p1 = new Character('Joey', 'Tribbiani');
var msg = p1.greet('Chandler');
alert(msg);
