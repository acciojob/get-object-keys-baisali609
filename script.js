//your JS code here. If required.
const student = {
	name: "John",
};

const student1 = {
	name: "John",
	age: 22,
	city: "abc"
};

function getKeys(obj){
	return Object.keys(obj);
}

console.log(getKeys(student));