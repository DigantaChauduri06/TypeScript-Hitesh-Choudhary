"use strict";
exports.__esModule = true;
var user = {
    name: "John",
    age: 30,
    email: "",
    games: ["PUBG", "CS:GO"]
};
user.games.push("Valorant"); // Error: Cannot assign to 'games' because it is a read-only property.
var myGames = ["Valorant", "CS:GO"];
var user2 = {};
// Function types
var add = function (a, b) { return a + b; };
function bubble() {
    console.log("bubble");
}
var user3 = {};
var myUser = 0 /* Role.ADMIN */;
