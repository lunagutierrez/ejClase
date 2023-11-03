function throwCoin(){
  let coin = Math.random()
  if(coin > 0.5){
    result = "Heads"
  }else{
    result = "Tails"
  }
  return result;
}

function getPlayer(){
  const name = prompt("What is your name?")
  const bet = parseInt(prompt("How much do you want to bet?"))
  const gamble = prompt("Heads or Tails?")
  const balance = bet
  return [name, bet, gamble, balance]
}

function getBalance(balance, bet, gamble){
  if(throwCoin() === gamble){
    balance = balance+(bet*2)
  }else{ 
    balance = balance-bet
  }
  return balance
}

function play(){
  userInfo = getPlayer();

  let name = userInfo[0];
  let bet = userInfo[1];
  let gamble = userInfo[2];
  let balance = userInfo[3];

  result = throwCoin();
  
  newBalance = getBalance(balance, bet, gamble);
  console.log(`You guessed ${gamble} and the result was ${result}. Your balance is:  ${newBalance}`)
}

play();