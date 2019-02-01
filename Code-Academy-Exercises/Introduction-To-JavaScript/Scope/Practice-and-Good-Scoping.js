
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

/* I learned about Good Block scope is a powerful tool in JavaScript,
 since it allows us to define variables with precision, and not pollute the global namespace.
 If a variable does not need to exist outside a block — it shouldn’t! */
