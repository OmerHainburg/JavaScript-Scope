//Blocks and Scope
const city = 'New York City';

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

//Global Scope
const satellite  = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

//Block Scope
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  //console.log(lightWaves); //Reference Error

  //Scope Pollution
const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
let stars1 = 'North Star';

const callMyNightSky1 = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite1 + ', ' + stars1 + ', ' + galaxy1;
};

console.log(callMyNightSky());
console.log(stars1);

//Practice Good Scoping
const logVisibleLightWaves1 = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic')
    {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }    
    console.log(lightWaves);
};  
 logVisibleLightWaves1();