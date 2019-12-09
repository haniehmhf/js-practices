function create(fn) {
  var o = Object.create(fn.prototype);
  fn.call(o);
  return o;
}

function Thing() {
  this.x = 1;
  this.y = 2;
  return console.log(3);
}

Thing.prototype.f = function () {
  console.log(this.x)
}
Thing.prototype.g = function () {
  console.log(this.y)
}

var o = create(Thing);

/*
What does “create” function do ? Is there a nickname for it ? it does what *new* do
o.constructor.name => Thing
o.constructor() => 3
Object.getPrototypeOf(o) === Thing  => false => Object.getPrototypeOf(o) === Thing.prototype 
o.Thing() => meanless! (undefined)
o instanceof Thing   => true
Thing.constructor.name = Each constructor has *Function* as name, and each instance has the Main Function name as constructor name.
Thing instanceof Function  => true
*/