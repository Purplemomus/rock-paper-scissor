

function getComputerChoice(){
    let choice = ["rock","paper","scisser"];
    let rand = Math.floor(Math.random()*3);
    return choice[rand];
};

function getHumanChoice(){
    let choice = prompt("make a choice between rock, paper and scisser");
    let human = choice.toLowerCase();
    if( human == "paper" || human == "scisser" || human == "rock"){
        return human;
    }
    else{
        return "be a human and act like a human";
    } 
};


let machin = getComputerChoice();
let user = getHumanChoice();
console.log(machin,user);
function whoWins(user, machin){
 

    const winner = new Map([
        ["scisser","paper"],
        ["paper","rock"],
        ["rock","scisser"]
    ]);
    x = winner.get(user)
    if (winner.get(user) == machin){
        return "you are the best";
   
    }
    else if(user == machin){
        return "u r even"
    }
    else{
        return"u r a fucking loser"
    };
   

}

console.log(whoWins(user,machin));

