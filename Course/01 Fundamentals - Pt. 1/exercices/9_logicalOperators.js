// Comment out the previous code so the prompt doesn't get in the way.
// Let's say Sarah is looking for a new country to live in. 
// She wants to live in a country that speaks English, has less than 50 million people and is not an island.
// Write an if statement to help Sarah figure out if your country is right for her.
//  You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// If yours is the right country, log a strings like this 'You should live in Portugal :)'. 
// If not, log 'Portugal does not meet your criteria :('.
// Probably your country does not meet all the criteria. 
// So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

const country = "Portugal";
const language = "portuguese";
// const language = "english";
const population = 11;
const isIsland = false;

if (language === "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}.`);
} else {
    console.log(`${country} does not meet your criteria.`);
}