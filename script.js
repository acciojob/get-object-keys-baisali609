//your JS code here. If required.
const student = {
	name: "John",
};

function getKeys(obj){
	return Object.keys(obj);
}

console.log(getKeys(student));


cy.visit(baseUrl + "/main.html");
cy.document().then(doc => {
    const script = doc.querySelector('script[src="./script.js"]');
    const scriptUrl = script.getAttribute("src");
    cy.readFile(scriptUrl).then(jsCode => {
        eval(jsCode);

        const myObj = { name: "John", age: 30, city: "New York" };
        const keys = getKeys(myObj); // FIXED: Call function directly
        expect(keys).to.deep.equal(["name", "age", "city"]);
    });
});
