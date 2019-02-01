
// Write your code below

let bobsFollowers = ['Alex','Stas','Mark','Toni'];
let tinasFollowers = ['Alex','Mark','Alise'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; i < tinasFollowers.length; j++) {
    if (bobsFollowers[i]=tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// I learned about a nested loop, when a loop running inside another loop.
