function getComputerChoice(min, max){
    const maxFloor = Math.floor(max);
    const minCeil = Math.ceil(min);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
}

switch (getComputerChoice(1, 3)){
    case 1: console.log("Rock");
    break;
    case 2: console.log("Paper");
    break;
    case 3: console.log("Scissors");
    default: "Thinking..."
}



