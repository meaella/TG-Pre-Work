
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}
let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)

/* I learned that when we pass a variable assigned to an object into a function as an argument,
 the computer interprets the parameter name as pointing to the space in memory holding that object */
