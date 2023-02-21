type User = {
  readonly name: string;
  age: number;
  email: string;
  readonly games: string[];
  craditCard?: string; // optional
};

const user: User = {
  name: "John",
  age: 30,
  email: "",
  games: ["PUBG", "CS:GO"],
};

user.games.push("Valorant"); // Error: Cannot assign to 'games' because it is a read-only property.

const myGames = ["Valorant", "CS:GO"];
//user.games = myGames; // Error: Cannot assign to 'games' because it is a read-only property.

type I = {} | null | undefined;

const user2: I = {};

// Function types

const add = (a: number, b: number): number => a + b;

function bubble(): void {
  console.log("bubble");
}

// Type combinations
type type1 = {
  name: string;
};
type type2 = {
  age: number;
};
type type3 = {
  email: string;
};

const user3: type1 & type2 & type3 = {} as type1 & type2 & type3;

// Enum

const enum Role {
  ADMIN,
  USER,
  GUEST,
}

const myUser = Role.ADMIN;

export {};
