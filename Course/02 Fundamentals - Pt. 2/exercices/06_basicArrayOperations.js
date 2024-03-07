let neighbours = ["Spain", "Switzerland", "Italy"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country.");
}

console.log(neighbours.indexOf("Italy"));
neighbours[2] = "Itália";
console.log(neighbours);