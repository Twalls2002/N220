function startAdventure() {
  //Prompt the user for their first choice in the adventure
  const firstChoice =
    prompt(`You're walking in a dark forest. Suddenly, you hear rustling in the bushes. What do you do?
    \n1. Investigate the noise
    \n2. Walk away quickly`);

  //Check the user's first choice
  if (firstChoice === "1") {
    // User chose to investigate the noise
    const secondChoice = confirm(
      `You approach the bushes and find a small dog. Do you take the dog home?`
    );

    //Check the user's decision regarding the dog
    if (secondChoice) {
      // User chooses to take the dog
      document.getElementById("story").innerHTML +=
        "<br />You take the dog home and it becomes your best friend!";
    } else {
      // User chooses not to take the dog
      document.getElementById("story").innerHTML +=
        "<br />You decide to leave the dog and continue your journey.";
    }
  } else if (firstChoice === "2") {
    //User chose to walk away quickly
    const thirdChoice =
      prompt(`You quickly walk away and find a path that leads to a clearing. What do you do next?
        \n1. Sit down and rest
        \n2. Continue exploring the forest`);

    //Check the user's second choice
    if (thirdChoice === "1") {
      //User chooses to rest
      document.getElementById("story").innerHTML +=
        "<br />You sit down, relax, and enjoy the sounds of nature.";
    } else {
      //User chooses to explore further
      document.getElementById("story").innerHTML +=
        "<br />You continue exploring and discover a hidden waterfall!";
    }
  } else {
    //If the user did not make a valid choice
    document.getElementById("story").innerHTML +=
      "<br />You didn't make a valid choice and the adventure ends.";
  }
}
