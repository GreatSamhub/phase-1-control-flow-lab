function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return 'This one is on me!'
  }else if (feet > 2500){
    return 'No can do.'
  }else if (feet > 2000){
    return 'I will gladly take your thirty bucks.'
  }else{
    return 'Try another distance'
  }
}
console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city){
  return city === 'NYC'? 'Ok, sounds good.' : 'No go.'
}
console.log(ternaryCheckCity('Pittsburgh'))

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank You.'
    default:      
      return 'Bye.'
  } 
}
console.log(switchOnCharmFromTip('generous'))